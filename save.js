const SAVE_VARIABLE_NAME = "rjAp00yLHIiXOSTb";

var player={}
var tmp={}
var stop_saving = false;
function start(){
  let a={
    version: 0, // to change something game-breaking in saves if we need to
    won: false,
    gimmick: Math.floor(Math.random() * 4),
    total_deaths: 0,
    first_tick: Date.now(),
    won_tick: null,
    language: "en",
    unlocked_rooms: {},
    resources:{},
    tank: {
      oxygen: 10000,
      carbon_dioxide: 0,
      void: 0
    },
    machines: {
      printer: {
        current_job: null,
        starts_at: null,
        ends_at: null,
        stored_energy:0,
        recipe_settings: {},
      },
      generator: {
        extraction_ongoing: false,
        target_x: null,
        target_y: null,
        stored_energy:0
      },
      crafter: {
        current_job: null,
        job_time: null,
        time_passed: null,
        bulk: false,
        batch: null
      },
      battery_array:{
        stored_energy:0,
        accumulators:0
      },
      oxygen_generator: {
        hover: false
      },
      propulsion: {
        selected_star: null,
        hovered_star: null,
        rerolls: 0
      },
      cockpit: {
        stored_energy: 0,
        warping: false,
        last_energy_transfer: 0
      }
    },
    last_tick: Date.now(),
    clickable_objects: {},
    upgrades: {},
    locations: {},
    current_screen: 'main',
    current_location: 'workshop_room',
    current_modal: '',
    has_flashlight: false,
    last_experience_gain: 0,
  }
  for (let object_id in CLICKABLE_OBJECTS) {
    a.clickable_objects[object_id] = false;
  }
  for (let upgrade_id in UPGRADES) {
    a.upgrades[upgrade_id] = new Upgrade(upgrade_id);
  }
  for (let resource_id in GAME_RESOURCES) {
    if ('default_amount' in GAME_RESOURCES[resource_id]) {
      a.resources[resource_id] = GAME_RESOURCES[resource_id].default_amount;
    }
    else {
      a.resources[resource_id] = 0;
    }
    if ('is_Decimal' in GAME_RESOURCES[resource_id] && GAME_RESOURCES[resource_id].is_Decimal) {
      a.resources[resource_id] = new Decimal(a.resources[resource_id]);
    }
  }
  for (let recipe_id in PRINTER_RECIPES) {
    a.machines.printer.recipe_settings[recipe_id] = {auto_repeat: false};
  }
  for (let location_id in LOCATIONS) {
    a.locations[location_id] = {
        unlocked: (location_id == a.current_location),
        unlock_progress: 0,
        energy_grid: false,
    };
    a.unlocked_rooms[location_id] = (location_id == a.current_location);
  }
  // Extra data for special locations
  a.locations.enhancement_room.secret_passcode = generate_secret_passcode();
  a.locations.enhancement_room.current_guess = "";
  a.locations.enhancement_room.guess_history = [];
  a.locations.crafting_room.water_puzzle = choose(LOCATIONS.crafting_room.water_puzzle_instances);
  a.locations.crafting_room.water_puzzle_state = [a.locations.crafting_room.water_puzzle[0], 0, 0];
  a.locations.battery_room.sudoku = choose(LOCATIONS.battery_room.sudoku_instances);
  a.locations.battery_room.sudoku_state = a.locations.battery_room.sudoku.split('');
  a.locations.oxygen_room.labyrinth = choose(LOCATIONS.oxygen_room.labyrinth_instances);
  a.locations.oxygen_room.labyrinth_visits = []
  for (let i = 0; i < LOCATIONS.oxygen_room.labyrinth_width; i++) {
    a.locations.oxygen_room.labyrinth_visits.push([]);
    for (let j = 0; j < LOCATIONS.oxygen_room.labyrinth_height; j++) {
      a.locations.oxygen_room.labyrinth_visits[i].push(0);
    }
  }
  a.locations.oxygen_room.labyrinth_pos = {
    x: LOCATIONS.oxygen_room.labyrinth_entrance.x,
    y: LOCATIONS.oxygen_room.labyrinth_entrance.y
  }
  a.locations.propulsion_room.robot_program_instance = choose(LOCATIONS.propulsion_room.robot_program_instances);
  a.locations.propulsion_room.decorations = [];
  a.locations.propulsion_room.program = [];
  a.locations.propulsion_room.processors = {};
  for (let type in LOCATIONS.propulsion_room.processor_types) {
    a.locations.propulsion_room.processors[LOCATIONS.propulsion_room.processor_types[type]] = {
      owned: 0,
      free: 0
    }
  }
  a.locations.propulsion_room.star_selection = choose_k(GENERATOR_ROOM_SOURCES.length, 3);
  return a
}
function save(override=false){
  if (!stop_saving || override)
    localStorage.setItem(SAVE_VARIABLE_NAME, btoa(JSON.stringify(player)))
}
function fixSave() {

let    defaultData = start();

    fixData(defaultData, player);


    }


function copy_arguments(source, dest) {
  for (let item in source) {
    dest[item] = source[item];
  }
}


function fixData(defaultData, newData) {

    for (item in defaultData) {

        if (defaultData[item] == null) {

            if (newData[item] === undefined)

                newData[item] = null;

        }

        else if (Array.isArray(defaultData[item])) {

            if (newData[item] === undefined)

                newData[item] = defaultData[item];


            else

                fixData(defaultData[item], newData[item]);

        }

        else if (defaultData[item] instanceof Decimal) { // Convert to Decimal

            if (newData[item] === undefined)

                newData[item] = defaultData[item];


            else

                newData[item] = new Decimal(newData[item]);

        }

        else if ((!!defaultData[item]) && (typeof defaultData[item] === "object")) {

            if (newData[item] === undefined || (typeof defaultData[item] !== "object"))

                newData[item] = defaultData[item];


            else {
                let new_object = new defaultData[item].constructor();
                copy_arguments(newData[item], new_object);
                newData[item] = new_object;

                fixData(defaultData[item], newData[item]);
            }

        }

        else {

            if (newData[item] === undefined)

                newData[item] = defaultData[item];

        }

    }

}

function load() {
	let get = localStorage.getItem(SAVE_VARIABLE_NAME);

	if (get === null || get === undefined) {
		player = start();
	}
	else {
		player = Object.assign(start(), JSON.parse(decodeURIComponent(escape(atob(get)))));
		fixSave();
    if (player.current_modal == 'export_save')
      player.current_modal = '';
	}
  (app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,
        
      },
    }))
}
window.onload=function(){load(); setInterval(function () {save()}, 100); setInterval(game_loop, 50);};

function exportSave() {
  let str = btoa(JSON.stringify(player)); 
const el = document.createElement("textarea");	
el.value = str;	document.body.appendChild(el);	
el.select();	el.setSelectionRange(0, 99999);
document.execCommand("copy");
document.body.removeChild(el); 
}


function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here")
  stop_saving = true;
  player =JSON.parse(atob(imported))
  save(true)
  window.location.reload();
    
}
function hardReset(){
  if(confirm("Are you sure??? It will reset EVERYTHING and you will not get any reward!!!")){
    player=start()
    window.location.reload();
    save()
  }
}
  function D(x){
    return new Decimal(x)
  }