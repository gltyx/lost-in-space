const UPGRADES = {
  "efficient_breathing": {
    group: "meta_reset", // display group
    cost: function(level) {  // level is the current upgrade level
      return {
        experience: Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return Math.pow(0.9, level)
    }, // can be omitted, level by default
    is_meta: true, // not reset when you die, default: false
    // limit: 1 / function() { return 1 }  to make the upgrade level limited
    // onbuy: function(level) { ... }  to make the upgrade do something specific on some levels -- "level" variable is the new level
    // unlock_function: function() { ... }  just a visual representation of something being locked, to be used in Vue components
  },
  "subspace_tanks": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 2 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return 1 + level * 0.5
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.generator_room }
  },
  "dead_useful": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 3 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return 1 + level * 0.05
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.enhancement_room }
  },
  "everfull_tanks": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 4 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return 90 - 40 * Math.pow(0.5, level)
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.crafting_room }
  },
  "aerobic_replication": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 5 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return 100 - 100 * Math.pow(0.5, level)
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.battery_room }
  },
  "perfect_scrubbing": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 6 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return 90 - 40 * Math.pow(0.5, level)
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.oxygen_room }
  },
  "vacuum_chamber": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 7 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return Math.pow(1.5, level)
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.propulsion_room }
  },
  "command_chain": {
    group: "meta_reset",
    cost: function(level) { 
      return {
        experience: 8 * Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return Math.pow(3, level)
    },
    is_meta: true,
    unlock_function: function() { return player.unlocked_rooms.cockpit }
  },
  
  "rapid_prototyping": {
    group: "printer",
    cost: function(level) {
      return {
        wire: Math.round(Math.pow(2, level)) + Math.round(Math.pow(level, 2)),
        memory_card: (level < 2) ? 0 : Math.round(Math.pow(1.8, level - 2)),
        cpu: (level < 6) ? 0 : Math.round(Math.pow(1.6, level - 6)),
      }
    },
    effect: function(level) {
      return Math.pow(0.8, level)
    },
    unlock_function: function() {
      return player.locations.generator_room.unlocked
    }
  },
  "supercharge": {
    group: "generator",
    cost: function(level) {
      return {
        wire: Math.round(Math.pow(2.5, level)) + Math.round(Math.pow(level, 2.5))
      }
    },
    effect: function(level) {
      return Math.pow(1.5, level)
    },
    unlock_function: function() {
      return player.locations.generator_room.unlocked
    }
  },
  "extra_accumulator": {
    group: "generator",
    cost: function(level) {
      return {
        accumulator: Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return level*Math.max(1,level-1)*Math.max(1,level-3)*Math.max(1,level-5)*2+1
    },
    unlock_function: function() {
      return player.locations.generator_room.unlocked
    }
  },
  "extra_accumulator_print": {
    group: "printer",
    cost: function(level) {
      return {
        accumulator: Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return Math.max(level*Math.max(1,level-1)*2-1,0)
    },
    unlock_function: function() {
      return player.locations.generator_room.unlocked
    }
  },
  /*"extra_accumulator_battery": {
    group: "battery_array",
    cost: function(level) {
      return {
        accumulator: Math.round(Math.pow(2, level+2))
      }
    },
    effect: function(level) {
      return level*Math.max(1,level-1)*3+1
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    }
  },*/
  "automation": {
    group: "printer",
    cost: function(level) {
      return {
        memory_card: 1
      }
    },
    unlock_function: function() {
      return player.locations.generator_room.unlocked
    },
    limit:1
  },
  "enhancement_more_oxygen": {
    group: "enhancement",
    cost: function(level) {
      return {
        empty_tank: 1,
        pipe: Math.round(Math.pow(level + 1, 1.3))
      }
    },
    effect: function(level) {
      return level*player.upgrades.enhancement_efficiency.effect*player.upgrades.dead_useful.effect*0.5 + 1
    },
    unlock_function: function() {
      return player.locations.enhancement_room.unlocked
    },
    onbuy: function(level) {
      expand_personal_tank()
    }
  },
  "enhancement_more_battery": {
    group: "enhancement",
    cost: function(level) {
      return {
        accumulator: Math.round(Math.pow(level + 1, 1.3))
      }
    },
    effect: function(level) {
      return level*player.upgrades.enhancement_efficiency.effect*player.upgrades.dead_useful.effect*0.5 + 1
    },
    unlock_function: function() {
      return player.locations.enhancement_room.unlocked
    }
  },
  "enhancement_more_breaths": {
    group: "enhancement",
    cost: function(level) {
      return {
        filter: Math.round(Math.pow(level + 1, 1.3))
      }
    },
    effect: function(level) {
      return Math.pow(0.85, level * player.upgrades.enhancement_efficiency.effect * player.upgrades.dead_useful.effect)
    },
    unlock_function: function() {
      return player.locations.enhancement_room.unlocked
    },
    limit: 5
  },
  "blue_supremacy": {
    group: "generator",
    cost: function(level) {
      return {
        filter: Math.round(Math.pow(2, level))
      }
    },
    effect: function(level) {
      return Math.pow(level+1, 2)
    },
    unlock_function: function() {
      return player.locations.enhancement_room.unlocked
    }
  },
  "automatic_generator_transfer": {
    group: "generator",
    cost: function(level) {
      return {
        antenna: 8
      }
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked
    },
    limit: 1
  },
  "printer_energy_efficiency": {
    group: "printer",
    cost: function(level) {
      return {
        insulated_wire: 8 * Math.round(Math.pow(3, level))
      }
    },
    effect: function(level) {
      return Math.pow(0.88, level)
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked
    }
  },
  "multispectral_analysis": {
    group: "generator",
    cost: function(level) {
      return {
        antenna: Math.round(Math.pow(2, level + 1))
      }
    },
    effect: function(level) {
      return Math.pow(level+1, 3)
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked
    }
  },
  "bulk_crafting": { 
    group: "crafting",
    cost: function(level) {
      return {
        energy_grid_kit: 1
      }
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked
    },
    limit: 1
  },
  "enhancement_efficiency": {
    group: "enhancement",
    cost: function(level) {
      return {
        insulated_wire: 16
      }
    },
    effect: function(level) {
      return level * player.upgrades.dead_useful.effect * 0.25 + 1;
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked && player.locations.enhancement_room.energy_grid
    },
    onbuy: function(level) {
      expand_personal_tank()
    },
    limit: 1
  },
  "crafting_efficiency": {
    group: "crafting",
    cost: function(level) {
      return {
        insulated_wire: 16 * Math.pow(2, level)
      }
    },
    effect: function(level) {
      return Math.pow(0.8, level)
    },
    unlock_function: function() {
      return player.locations.crafting_room.unlocked && player.locations.crafting_room.energy_grid
    }
  },
  "multispectral_analysis_2": {
    group: "generator",
    cost: function(level) {
      return {
        beacon: Math.round(Math.pow(2, level + 1))
      }
    },
    effect: function(level) {
      return Math.pow(level+1, 4)
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    }
  },
  "wireless_charging": {
    group: "battery_array",
    cost: function(level) {
      return {
        beacon: 16
      }
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    },
    limit: 1
  },
  "high_density_storage": {
    group: "battery_array",
    cost: function(level) {
      return {
        transformator: Math.pow(2, level)
      }
    },
    effect: function(level) {
      return level + 1
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    }
  },
  "parallelization_algorithms": {
    group: "crafting",
    cost: function(level) {
      return {
        cpu: 1
      }
    },
    effect: function(level) {
      return 1 - level * 0.2
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    },
    limit: 1
  },
  "separation_algorithms": {
    group: "enhancement",
    cost: function(level) {
      return {
        cpu: Math.pow(2, level)
      }
    },
    effect: function(level) {
      return 1 - Math.pow(0.85, level * player.upgrades.enhancement_efficiency.effect * player.upgrades.dead_useful.effect)
    },
    unlock_function: function() {
      return player.locations.battery_room.unlocked
    },
    limit: 5
  },
  "oxygen_generator_throughput": {
    group: "oxygen_generator",
    cost: function(level) {
      return {
        pipe: Math.pow(5, level + 1)
      }
    },
    effect: function(level) {
      return Math.pow(1.5, level)
    },
    unlock_function: function() {
      return player.locations.oxygen_room.unlocked
    }
  },
  "oxygen_generator_insulation": {
    group: "oxygen_generator",
    cost: function(level) {
      return {
        insulated_wire: 8 * Math.pow(5, level)
      }
    },
    effect: function(level) {
      return Math.pow(0.85, level)
    },
    unlock_function: function() {
      return player.locations.oxygen_room.unlocked
    }
  },
  "better_isolation": {
    group: "oxygen_generator",
    cost: function(level) {
      return {
        rubber_sheet: Math.pow(5, level)
      }
    },
    effect: function(level) {
      return 100 - (100 - player.upgrades.perfect_scrubbing.effect) * Math.pow(0.85, level)
    },
    unlock_function: function() {
      return player.locations.oxygen_room.unlocked
    }
  },
  "direct_connection": {
    group: "printer",
    cost: function(level) {
      return {
        insulated_wire: 128,
        transformator: 2
      }
    },
    unlock_function: function() {
      return player.locations.propulsion_room.unlocked
    },
    limit: 1
  },
  "propulsion_more_choices": {
    group: "propulsion",
    cost: function(level) {
      return {
        cpu: 8
      }
    },
    unlock_function: function() {
      return player.locations.propulsion_room.unlocked
    },
    limit: 1
  },
  "propulsion_effectiveness": {
    group: "propulsion",
    cost: function(level) {
      return {
        pipe: 10 * Math.pow(4, level)
      }
    },
    effect: function(level) {
      return Math.pow(2, level)
    },
    unlock_function: function() {
      return player.locations.propulsion_room.unlocked
    }
  },
  "propulsion_cheaper_rerolls": {
    group: "propulsion",
    cost: function(level) {
      return {
        transformator: 4 * Math.pow(4, level)
      }
    },
    effect: function(level) {
      return Math.pow(0.8, level)
    },
    unlock_function: function() {
      return player.locations.propulsion_room.unlocked
    }
  },
}