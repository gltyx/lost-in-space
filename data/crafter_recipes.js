const CRAFTER_RECIPES = {
  antenna: {
    cost: {
      wire: 4,
      memory_card: 1
    },
    time: 2,
    unlock: function() { return player.locations.crafting_room.unlocked }
  },
  insulated_wire: {
    output: 8, // 1 if omitted
    cost: {
      wire: 8,
      rubber_sheet: 1
    },
    time: 5, // in seconds
    unlock: function() { return player.locations.crafting_room.unlocked } // the unlock function
  },
  energy_grid_kit: {
    cost: {
      insulated_wire: 12,
      accumulator: 2
    },
    time: 25,
    unlock: function() { return player.locations.crafting_room.unlocked }
  },
  beacon: {
    cost: {
      antenna: 4,
      accumulator: 1
    },
    time: 10,
    unlock: function() { return player.locations.battery_room.unlocked }
  },
  transformator: {
    cost: {
      wire: 80,
      accumulator: 2
    },
    time: 30,
    unlock: function() { return player.locations.battery_room.unlocked }
  },
  cpu: {
    cost: {
      transistor_plate: 8,
      wire: 28
    },
    time: 60,
    unlock: function() { return player.locations.battery_room.unlocked }
  },
}

function get_crafting_time_cost(name) {
  let base_time = unwrap(CRAFTER_RECIPES[name].time, 0);
  base_time *= player.upgrades.crafting_efficiency.effect;
  if (player.machines.crafter.bulk) base_time *= Math.pow(get_bulk_crafting_amount(name), player.upgrades.parallelization_algorithms.effect);
  return base_time;
}

function get_bulk_crafting_amount(item) {
  let res = null;
  let cost = unwrap(CRAFTER_RECIPES[item].cost, {});
  for (let item in cost) {
    let item_req;
    if (player.resources[item] instanceof Decimal) {
      item_req = Math.floor(player.resources[item].div(cost[item]).toNumber());
    }
    else {
      item_req = Math.floor(player.resources[item] / cost[item]);
    }
    if (res === null || item_req < res) res = item_req;
  }
  return Math.max(1, res);
}

function get_crafting_cost(item) {
  let base_cost = unwrap(CRAFTER_RECIPES[item].cost, {});
  if (!player.machines.crafter.bulk) return base_cost;
  let times = get_bulk_crafting_amount(item);
  let cost = {};
  for (let item in base_cost) {
    if (base_cost[item] instanceof Decimal) {
      cost[item] = base_cost[item].mul(times);
    }
    else {
      cost[item] = base_cost[item] * times;
    }
  }
  return cost;
}

function can_craft_item(item) {
  if (!unwrap(CRAFTER_RECIPES[item].unlock, true)) return false;
  if (player.machines.crafter.current_job !== null) return false;
  
  let cost = unwrap(CRAFTER_RECIPES[item].cost, {});
  for (let item in cost) {
    if (player.resources[item] instanceof Decimal) {
      if (player.resources[item].lt(cost[item])) return false;
    }
    else {
      if (player.resources[item] < cost[item]) return false;
    }
  }
  
  if (player.resources[item] instanceof Decimal) {
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item].gte(unwrap(GAME_RESOURCES[item].limit))) return false;
  }
  else {
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item] >= unwrap(GAME_RESOURCES[item].limit)) return false;
  }
  
  return true;
}

function craft_item(item) {
  if (!can_craft_item(item)) return false;
  
  let bulk_amount = 1;
  if (player.machines.crafter.bulk) bulk_amount = get_bulk_crafting_amount(item);
  let time_cost = get_crafting_time_cost(item);
  let cost = get_crafting_cost(item);
  for (let item in cost) {
    remove_resource(item, cost[item]) 
  }
  
  player.machines.crafter.current_job = item;
  player.machines.crafter.job_time = time_cost;
  player.machines.crafter.time_passed = 0;
  player.machines.crafter.batch = bulk_amount;
}