Vue.component('location-generator_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'generator_room'">
      <machine-header name="generator"></machine-header>
      <div class='generator-target-selection'>
        <div class='generator-target-map' @click="update_generator_target(event)">
          <div :class="'star star-' + source.type" :style="'width: ' + star_size(source) + '%; height: ' + (2 * star_size(source)) + '%; left: ' + (100 * source.x - star_size(source) / 2) + '%; top: ' + (100 * source.y - star_size(source)) + '%'" v-for="source in GENERATOR_ROOM_SOURCES"></div>
          <img class="generator-target" :style="'--top: ' + (100 * player.machines.generator.target_y) + '%; --left: ' + (100 * player.machines.generator.target_x) + '%; transform: rotate(' + ((player.last_tick / 100) % 360) + 'deg)'" :src="img('target', 'svg')" v-show="player.machines.generator.target_x !== null"></img>
        </div>
        <div class='generator-target-data'>
          <p style="font-size: 2rem">{{ localize('target') }}</p>
          <p style="font-size: 1.5rem" v-show="player.machines.generator.target_x === null">{{ localize('not_selected') }}</p>
          <p :class="'generator-target-name star-' + GENERATOR_ROOM_SOURCES[get_nearest_star_and_energy_production().star].type" v-show="player.machines.generator.target_x !== null">{{ GENERATOR_ROOM_SOURCES[get_nearest_star_and_energy_production().star].name }}</p>
          <p class="generator-target-energy">{{ scientificFormat(get_nearest_star_and_energy_production().energy, " ") }}W</p>
          <div class='header-delimitor'></div>
          <button class="generator-target-button" v-show="!player.machines.generator.extraction_ongoing" @click="player.machines.generator.extraction_ongoing = true">{{ localize('confirm-selection') }}</button>
        </div>
      </div>
      <div class='generator-storage-data'>
      <div class="generator-storage-bar">
       <div class="filled" :style="'width: ' + (100 * player.machines.generator.stored_energy / get_generator_energy_capacity()) + '%'"></div>
       <p style="font-size:1.5rem;position:relative; top:-1em">{{scientificFormat(player.machines.generator.stored_energy, ' ')}}Wh/{{scientificFormat(get_generator_energy_capacity(), ' ')}}Wh</p>
  
      </div>
       <button class="generator-storage-transfer" @click="transfer_energy">{{ localize('transfer_energy_generator') }}</button>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="generator" rows="2"></upgrade-list>
    </div>`
});

function get_generator_energy_capacity() {
  let base_capacity = 1e5;
  base_capacity*=player.upgrades.extra_accumulator.effect
  return base_capacity;
}

function star_size(star) {
  return 16 / star.distance;
}

function update_generator_target(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  let element_x = event.srcElement.offsetWidth;
  let element_y = event.srcElement.offsetHeight;
  player.machines.generator.extraction_ongoing = false;
  player.machines.generator.target_x = x / element_x;
  player.machines.generator.target_y = y / element_y;
}

function get_nearest_star_and_energy_production() {
  let ret = { star: 0, energy: 0 };
  if (player.machines.generator.target_x === null) return ret;
  for (let i in GENERATOR_ROOM_SOURCES) {
    let dist = Math.pow(4 * Math.pow(player.machines.generator.target_x - GENERATOR_ROOM_SOURCES[i].x, 2) + Math.pow(player.machines.generator.target_y - GENERATOR_ROOM_SOURCES[i].y, 2), 0.5);
    let adjusted_dist = dist * GENERATOR_ROOM_SOURCES[i].distance;
    let base_energy_production = 1e4 / Math.pow(adjusted_dist + 0.01, 2);
    base_energy_production*=player.upgrades.supercharge.effect
    if (GENERATOR_ROOM_SOURCES[i].type == 'blue') base_energy_production *= player.upgrades.blue_supremacy.effect;
    if (GENERATOR_ROOM_SOURCES[i].type == 'white') base_energy_production *= player.upgrades.multispectral_analysis.effect;
    if (GENERATOR_ROOM_SOURCES[i].type == 'red') base_energy_production *= player.upgrades.multispectral_analysis_2.effect;
    if (player.machines.propulsion.selected_star != null && i == player.machines.propulsion.selected_star) base_energy_production *= get_propulsion_effect();
    if (base_energy_production > ret.energy) {
      ret = { star: i, energy: base_energy_production };
    }
  }
  return ret;
}
function transfer_energy(){
  let orginal_energy=player.resources.personal_battery
  player.resources.personal_battery=Math.min(player.resources.personal_battery+player.machines.generator.stored_energy,unwrap(GAME_RESOURCES['personal_battery'].limit))
  player.machines.generator.stored_energy=player.machines.generator.stored_energy-(player.resources.personal_battery-orginal_energy) //make stored energy won't transfer to personal battery if personal battery is over the limit
  if (player.machines.generator.stored_energy < 0) player.machines.generator.stored_energy = 0;
}