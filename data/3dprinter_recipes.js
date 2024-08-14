const PRINTER_RECIPES = {
  crowbar: {
    energy_cost: 1e5, // or function
    time_cost: 900, // in milliseconds
    extra_cost: { 
      metal_scrap: 1 
    }, // or function () { ... }, extra cost to print the item
    // unlock: function () { ... }, // unlock requirement, not limited by default
    // img: "your_path", // image path, recipe id by default
  },
  wire: {
    energy_cost: 1.2e5,
    time_cost: 500,
    unlock: function() { return player.locations.generator_room.unlocked }
  },
  accumulator: {
    energy_cost: 2e5,
    time_cost: 6000,
    extra_cost: {
      wire: 6
    },
    unlock: function() { return player.locations.generator_room.unlocked }
  },
  memory_card: {
    energy_cost: Math.pow(2, 20),
    time_cost: 4200,
    unlock: function() { return player.locations.generator_room.unlocked }
  },
  empty_tank: {
    energy_cost: 4e5,
    time_cost: 8000,
    extra_cost: {
      metal_scrap: 1
    },
    unlock: function() { return player.locations.enhancement_room.unlocked }
  },
  filter: {
    energy_cost: 1.6e6,
    time_cost: 14000,
    extra_cost: {
      memory_card: 1
    },
    unlock: function() { return player.locations.enhancement_room.unlocked }
  },
  pipe: {
    energy_cost: 7.4e5,
    time_cost: 7000,
    unlock: function() { return player.locations.enhancement_room.unlocked }
  },
  rubber_sheet: {
    energy_cost: 4.5e6,
    time_cost: 12000,
    unlock: function() { return player.locations.crafting_room.unlocked }
  },
  transistor_plate: {
    energy_cost: 1e7,
    time_cost: 20000,
    unlock: function() { return player.locations.battery_room.unlocked }
  },
  keycard: {
    energy_cost: 1e9,
    time_cost: 3000,
    unlock: function() { return player.locations.propulsion_room.unlocked }
  },
};




function get_recipe_time_cost(item) {
  let base_time = unwrap(PRINTER_RECIPES[item].time_cost, 0);
  base_time *= player.upgrades.rapid_prototyping.effect;
  return base_time;
}

function get_recipe_energy_cost(item) {
  let base_cost = unwrap(PRINTER_RECIPES[item].energy_cost, 0);
  base_cost *= player.upgrades.printer_energy_efficiency.effect;
  return base_cost;
}

function get_total_printer_energy() {
  let ret = player.machines.printer.stored_energy;
  if (player.current_location == 'workshop_room') ret += player.resources['personal_battery'];
  if (player.upgrades.direct_connection.level >= 1) ret += player.machines.battery_array.stored_energy;
  return ret;
}

function can_print_item(item) {
  if (!unwrap(PRINTER_RECIPES[item].unlock, true)) return false;
  if (player.machines.printer.current_job !== null) return false;
  
  let cost = unwrap(PRINTER_RECIPES[item]["extra_cost"], {});
  for (let item in cost) {
    if (player.resources[item] instanceof Decimal) {
      if (player.resources[item].lt(cost[item])) return false;
    }
    else {
      if (player.resources[item] < cost[item]) return false;
    }
  }
  
  if (get_total_printer_energy() < get_recipe_energy_cost(item)) return false;
  
  if (player.resources[item] instanceof Decimal) {
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item].gte(unwrap(GAME_RESOURCES[item].limit))) return false;
  }
  else {
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item] >= unwrap(GAME_RESOURCES[item].limit)) return false;
  }
  
  return true;
}

function print_item(item) {
  if (!can_print_item(item)) return false;
  
  let energy_payment = get_recipe_energy_cost(item);
  let current_energy_payment;
  
  current_energy_payment = Math.min(energy_payment, player.machines.printer.stored_energy);
  energy_payment -= current_energy_payment;
  player.machines.printer.stored_energy -= current_energy_payment;
  if (player.upgrades.direct_connection.level >= 1) {
    current_energy_payment = Math.min(energy_payment, player.machines.battery_array.stored_energy);
    energy_payment -= current_energy_payment;
    player.machines.battery_array.stored_energy -= current_energy_payment;
  }
  player.resources['personal_battery'] -= energy_payment
  let cost = unwrap(PRINTER_RECIPES[item]["extra_cost"], {});
  for (let item in cost) {
    if (player.resources[item] instanceof Decimal) {
      player.resources[item] = player.resources[item].sub(cost[item]);
    }
    else {
      player.resources[item] -= cost[item];
    }
  }
  
  player.machines.printer.current_job = item;
  player.machines.printer.starts_at = player.last_tick;
  player.machines.printer.ends_at = player.machines.printer.starts_at + get_recipe_time_cost(item);
}