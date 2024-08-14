const GAME_RESOURCES = {
  experience: {
    is_Decimal: false, // should it be Decimal? default is false
    is_meta: true, // not reset on death, default is false
    default_amount: 0, // the amount player starts with, default is 0
    // limit: number / function() { return number }  to limit the resource gain
    show_in_inventory: false, // should this resource be shown in inventory? default is true
    // usable: false, // or function() { return bool } - should there be a button allowing the resource to be used? default is false
    // extra_use_cost: dict or function() { return dict } - any extra costs to use that resource, default is none needed
    // onuse: function() { ... } // effect applied on use
  },
  oxygen_tank: {
    is_Decimal: false,
    is_meta: false,
    default_amount: 0,
    show_in_inventory: true,
    usable: true,
    onuse: function() { 
      let tank_volume = get_total_tank_volume();
      player.tank.oxygen += tank_volume * player.upgrades.everfull_tanks.effect / 100; // restores 50% of total oxygen base
      player.tank.void = Math.max(0, Math.min(tank_volume - player.tank.oxygen - player.tank.carbon_dioxide, player.tank.void));
      player.tank.carbon_dioxide = Math.max(0, Math.min(tank_volume - player.tank.oxygen, player.tank.carbon_dioxide));
      player.tank.oxygen = Math.max(0, Math.min(tank_volume, player.tank.oxygen));
      add_item('empty_tank');
    } 
  },
  personal_battery: {
    is_Decimal: false,
    is_meta: false,
    default_amount: 2e5,
    show_in_inventory: false,
    limit: function() {
      let base_capacity = 1e6;
      base_capacity *= player.upgrades.enhancement_more_battery.effect;
      return base_capacity;
    }
  },
  energy_grid_kit: {
    usable: function() { return player.current_location.indexOf('locked') === -1 && !player.locations[player.current_location].energy_grid },
    onuse: function() { player.locations[player.current_location].energy_grid = true }
  },
  metal_scrap: {},
  crowbar: { limit: 1 },
  wire: {},
  accumulator: {},
  memory_card: {},
  empty_tank: {},
  filter: {},
  pipe: {},
  antenna: {},
  rubber_sheet: {},
  insulated_wire: {},
  beacon: {},
  transformator: {},
  transistor_plate: {},
  cpu: {},
  keycard: {},
};

function can_use_item(item) {
  if (!unwrap(GAME_RESOURCES[item]["usable"], false)) return false;
  let cost = unwrap(GAME_RESOURCES[item]["extra_use_cost"], {});
  for (let item in cost) {
    if (player.resources[item] instanceof Decimal) {
      if (player.resources[item].lt(cost[item])) return false;
    }
    else {
      if (player.resources[item] < cost[item]) return false;
    }
  }
  if (player.resources[item] instanceof Decimal) {
    if (player.resources[item].lt(1)) return false;
  }
  else {
    if (player.resources[item] < 1) return false;
  }
  return true;
}

function use_item(item){
  if (!can_use_item(item)) return;
  let cost = unwrap(GAME_RESOURCES[item]["extra_use_cost"], {});
  for (let item in cost) {
    if (player.resources[item] instanceof Decimal) {
      player.resources[item] = player.resources[item].sub(cost[item]);
    }
    else {
      player.resources[item] -= cost[item];
    }
  }
  if (player.resources[item] instanceof Decimal) player.resources[item]=player.resources[item].sub(1)
  else player.resources[item]=player.resources[item]-1
  GAME_RESOURCES[item].onuse()
}

function has_amount_of_resource(item, amount) {
  if (player.resources[item] instanceof Decimal) {
    if (player.resources[item].lt(amount)) return false;
  }
  else {
    if (player.resources[item] < amount) return false;
  }
  return true;
}

function remove_resource(item, amount) {
  if (player.resources[item] instanceof Decimal) {
    player.resources[item] = player.resources[item].sub(amount);
  }
  else {
    player.resources[item] -= amount;
  }
}