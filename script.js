Vue.component('game-screen', {
  template:`
  <div class='game-screen-grid' v-show="player.current_screen == 'main'" :style="(player.current_location == 'cockpit' && !player.locations.cockpit.energy_grid ? 'background-color: #010203;' : '')">
    <tank-contents></tank-contents>
    <inventory-section></inventory-section>
    <map-section></map-section>
    <p class='location-header'>{{ localize("location-" + player.current_location) }}</p>
    <location-workshop_room></location-workshop_room>
    <location-generator_room-locked></location-generator_room-locked>
    <location-generator_room></location-generator_room>
    <location-enhancement_room-locked></location-enhancement_room-locked>
    <location-enhancement_room></location-enhancement_room>
    <location-crafting_room-locked></location-crafting_room-locked>
    <location-crafting_room></location-crafting_room>
    <location-battery_room-locked></location-battery_room-locked>
    <location-battery_room></location-battery_room>
    <location-oxygen_room-locked></location-oxygen_room-locked>
    <location-oxygen_room></location-oxygen_room>
    <location-propulsion_room-locked></location-propulsion_room-locked>
    <location-propulsion_room></location-propulsion_room>
    <location-cockpit-locked></location-cockpit-locked>
    <location-cockpit></location-cockpit>
  </div>
  `
});

tmp.mouse_pos = {
  x: 0,
  y: 0
};


Vue.component('looking-hole', {
  template:`
  <img v-if="player.current_screen == 'main' && !player.has_flashlight" class="looking-hole" :src="img('looking_hole', 'svg')" :style="'top: ' + (-5000 + tmp.mouse_pos.y) + 'px; left: ' + (-5000 + tmp.mouse_pos.x) + 'px'">
  `
});


function update_mouse_position(e) {
  tmp.mouse_pos.x = e.pageX;
  tmp.mouse_pos.y = e.pageY;
}

function img(x, extension="png"){
  if(x===null)return;
  
  return "img/" + x + "." + extension;
}

function get_total_tank_volume() {
  let base_capacity = 10000;
  base_capacity *= player.upgrades.subspace_tanks.effect;
  base_capacity *= player.upgrades.enhancement_more_oxygen.effect;
  return base_capacity;
}

function expand_personal_tank() {
  let tank_defect = get_total_tank_volume() - player.tank.oxygen - player.tank.carbon_dioxide - player.tank.void;
  player.tank.oxygen += tank_defect * player.upgrades.aerobic_replication.effect / 100;
  player.tank.void += tank_defect * (1 - player.upgrades.aerobic_replication.effect / 100);
}

function get_breath_amount() {
  if (player.won) return 0;
  let base_amount = 100;
  base_amount *= player.upgrades['efficient_breathing'].effect;
  base_amount *= player.upgrades.enhancement_more_breaths.effect;
  if (has_amount_of_resource('personal_battery', 1e6)) base_amount *= (1 - player.upgrades.separation_algorithms.effect);
  return base_amount;
}

function breathe() {
  if (player.current_screen != "main") return;
  if (player.current_modal != "") return;
  let breath_amount = get_breath_amount();
  player.tank['oxygen'] -= breath_amount;
  player.tank['carbon_dioxide'] += breath_amount;
  if (has_amount_of_resource('personal_battery', 1e6) && player.upgrades.separation_algorithms.level >= 1) remove_resource('personal_battery', 1e6);
  if (player.tank['oxygen'] <= 0) {
    lose_the_game();
  }
}


document.body.addEventListener('click', breathe); 
document.body.addEventListener('mousemove', update_mouse_position); 

function meta_reset() {
  let new_player = start();
  // move stuff to player
  for (let key in player) {
    if (key == 'resources') {
      for(let item in GAME_RESOURCES){
        if(!unwrap(GAME_RESOURCES[item].is_meta, false)) player.resources[item] = new_player.resources[item];
      }
    }
    else if (key == 'upgrades') {
      for(let item in player.upgrades){
        player.upgrades[item].reset()
      }
    }
    else if (key == 'first_tick' || key == 'total_deaths' || key == 'unlocked_rooms' || key == 'language') {
      // Do nothing
    }
    else player[key] = new_player[key];
  }
  
  // Fix the oxygen tank
  player.tank.oxygen = get_total_tank_volume();
}

function lose_the_game() {
  let experience_income = 0;
  for (let location in player.locations) {
    if (player.locations[location].unlocked) {
      experience_income += 1;
      player.unlocked_rooms[location] = true;
    }
  }
  experience_income *= player.upgrades.command_chain.effect;
  player.total_deaths += 1;
  
  player.resources.experience += experience_income;
  player.last_experience_gain = experience_income;
  player.current_screen = "meta_reset"
  // meta_reset();
}







function game_loop() {
  let ts = Date.now();
  
  let diff=(ts - player.last_tick)/1000
  
  // Check for any printable objects
  if (player.machines.printer.current_job !== null && ts >= player.machines.printer.ends_at) {
    add_item(player.machines.printer.current_job);
    let last_item = player.machines.printer.current_job;
    player.machines.printer.current_job = null;
    if (player.upgrades.automation.level>=1 && player.machines.printer.recipe_settings[last_item].auto_repeat && can_print_item(last_item)) {
      print_item(last_item);
    }
  }
  
  if (player.machines.crafter.current_job != null && player.current_location == 'crafting_room') {
    player.machines.crafter.time_passed += diff;
    if (player.machines.crafter.time_passed >= player.machines.crafter.job_time) {
      add_item(player.machines.crafter.current_job, unwrap(CRAFTER_RECIPES[player.machines.crafter.current_job].output, 1) * player.machines.crafter.batch);
      player.machines.crafter.current_job = null;
    }
  }
  
  if (player.machines.generator.extraction_ongoing) {
    player.machines.generator.stored_energy=Math.min(player.machines.generator.stored_energy+(get_nearest_star_and_energy_production().energy/3600*diff),get_generator_energy_capacity())
  }
  if (player.upgrades.automatic_generator_transfer.level >= 1 && player.current_location == 'generator_room') {
    transfer_energy();
  }
  
  // Automatic transfer of energy along the grid
  if (player.locations.generator_room.energy_grid) {
    if (player.locations.workshop_room.energy_grid) {
      let energy_transfer = Math.min(player.machines.generator.stored_energy, get_printer_energy_capacity() - player.machines.printer.stored_energy);
      player.machines.generator.stored_energy -= energy_transfer;
      player.machines.printer.stored_energy += energy_transfer;
    }
  }
  
  if (player.locations.battery_room.energy_grid) {
    if (player.locations.generator_room.energy_grid) {
      let energy_transfer = Math.min(player.machines.generator.stored_energy, get_battery_array_energy_capacity() - player.machines.battery_array.stored_energy);
      player.machines.generator.stored_energy -= energy_transfer;
      player.machines.battery_array.stored_energy += energy_transfer;
    }
    if (player.upgrades.wireless_charging.level >= 1 && player.locations[player.current_location] !== null && player.locations[player.current_location].energy_grid) {
      let energy_transfer = Math.min(player.machines.battery_array.stored_energy, unwrap(GAME_RESOURCES['personal_battery'].limit) - player.resources.personal_battery);
      player.machines.battery_array.stored_energy -= energy_transfer;
      player.resources.personal_battery += energy_transfer;
    }
    if (player.locations.workshop_room.energy_grid) {
      let energy_transfer = Math.min(player.machines.battery_array.stored_energy, get_printer_energy_capacity() - player.machines.printer.stored_energy);
      player.machines.battery_array.stored_energy -= energy_transfer;
      player.machines.printer.stored_energy += energy_transfer;
    }
    if (player.locations.cockpit.energy_grid && player.machines.cockpit.warping) {
      let energy_transfer = Math.min(player.machines.battery_array.stored_energy, WARP_REQUIREMENT - player.machines.cockpit.stored_energy);
      player.machines.battery_array.stored_energy -= energy_transfer;
      player.machines.cockpit.stored_energy += energy_transfer;
      player.machines.cockpit.last_energy_transfer = (energy_transfer / diff) * (1 - Math.pow(0.9, diff)) + player.machines.cockpit.last_energy_transfer * Math.pow(0.9, diff);
      if (player.machines.cockpit.stored_energy >= WARP_REQUIREMENT * 0.9999 && !player.won) {
        player.won = true;
        player.current_modal = 'congratulations';
      }
    }
  }
  
  // Oxygen recharge
  if (player.locations.battery_room.energy_grid && player.locations.oxygen_room.energy_grid && player.machines.oxygen_generator.hover) {
    let energy_supply_diff = Math.min(diff, Math.min(player.machines.battery_array.stored_energy * 3.6e3 / get_oxygen_recharge_consumption(), player.tank.carbon_dioxide / get_oxygen_recharge_rate()));
    player.machines.battery_array.stored_energy -= energy_supply_diff * (get_oxygen_recharge_consumption() / 3.6e3);
    if (player.machines.battery_array.stored_energy < 0) player.machines.battery_array.stored_energy = 0;
    let carbon_dioxide_converted = Math.min(player.tank.carbon_dioxide, energy_supply_diff * get_oxygen_recharge_rate());
    player.tank.carbon_dioxide -= carbon_dioxide_converted;
    player.tank.oxygen += carbon_dioxide_converted * get_oxygen_recharge_efficiency();
    player.tank.void = get_total_tank_volume() - player.tank.oxygen - player.tank.carbon_dioxide;
  }
  
  if (player.won && player.won_tick === null) player.won_tick = ts;
  player.last_tick = ts;
}