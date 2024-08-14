const CLICKABLE_OBJECTS = {
  "flashlight": {
    location: "workshop_room",
    x: prng.nextFloat(), // in screens, this value sets it at random
    y: prng.nextFloat(), // in screens, this value sets it at random
    img: "flashlight", // from Assets, format .png
    height: 80, // in pixels
    width: 80, // in pixels
    onclick: function() { player.has_flashlight = true; }
  },
  "oxygen_tank_workshop_room_1": {
    location: "workshop_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "metal_scrap_workshop_room_1": {
    location: "workshop_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "metal_scrap_generator_room-locked_1": {
    location: "generator_room-locked",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "oxygen_tank_generator_room_1": {
    location: "generator_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_generator_room_2": {
    location: "generator_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_enhancement_room-locked_1": {
    location: "enhancement_room-locked",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_enhancement_room_1": {
    location: "enhancement_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_enhancement_room_2": {
    location: "enhancement_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "metal_scrap_enhancement_room_1": {
    location: "enhancement_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "metal_scrap_enhancement_room_2": {
    location: "enhancement_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "oxygen_tank_crafting_room_1": {
    location: "crafting_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_battery_room_1": {
    location: "battery_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "metal_scrap_battery_room_1": {
    location: "battery_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "metal_scrap_battery_room_2": {
    location: "battery_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "metal_scrap_battery_room_3": {
    location: "battery_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "metal_scrap",
    height: 80,
    width: 80,
    onclick: add_item_function('metal_scrap')
  },
  "oxygen_tank_oxygen_room_1": {
    location: "oxygen_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_oxygen_room_2": {
    location: "oxygen_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
  "oxygen_tank_oxygen_room_3": {
    location: "oxygen_room",
    x: prng.nextFloat(),
    y: prng.nextFloat(),
    img: "oxygen_tank",
    height: 80,
    width: 80,
    onclick: add_item_function('oxygen_tank')
  },
}

function click_on_object(object_id) {
  if (player.clickable_objects[object_id]) return;
  player.clickable_objects[object_id] = true;
  if ("onclick" in CLICKABLE_OBJECTS[object_id]) {
    CLICKABLE_OBJECTS[object_id].onclick();
  }
}

function add_item(item, amount=1) {
  if (player.resources[item] instanceof Decimal) {
    player.resources[item] = player.resources[item].add(amount);
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item].gt(unwrap(GAME_RESOURCES[item].limit))) {
      player.resources[item] = unwrap(GAME_RESOURCES[item].limit);
    }
  }
  else {
    player.resources[item] += amount;
    if (unwrap(GAME_RESOURCES[item].limit) !== null && player.resources[item] > unwrap(GAME_RESOURCES[item].limit)) {
      player.resources[item] = unwrap(GAME_RESOURCES[item].limit);
    }
  }
}

function add_item_function(item) {
  return function() {
    add_item(item);
  }
}