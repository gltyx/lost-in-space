Vue.component('location-propulsion_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'propulsion_room-locked'">
      <p class='lock-desc'>{{ localize('location-propulsion_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('robot_program-desc') }}</p>
        <div class='rules-example'>
        </div>
      </div>
      <div class='minigame' v-show="player.locations.propulsion_room.unlock_progress < 1">
        <p class='action-desc'>{{ localize('robot_program-action') }}</p>
        <div class='robot_program-minigame'>
          <div class='robot_program-field'>
            <template v-for='x in 6'>
              <div v-for='y in 6' :style="'grid-row: ' + y + '; grid-column: ' + x" :class="'labyrinth-cell with-item ' + (player.locations.propulsion_room.robot_program_instance[(x-1) + (y-1) * 6] == '#' ? 'wall ' : '')">
                <img class="robot" v-if="player.locations.propulsion_room.robot_program_instance[(x-1) + (y-1) * 6] == 'S'" :src="img('robot', 'svg')">
                <img class="beacon" v-if="player.locations.propulsion_room.robot_program_instance[(x-1) + (y-1) * 6] == 'E'" :src="img('reactor')">
              </div>
            </template>
            <div class="robot_program-decoration" v-for="(deco, i) in player.locations.propulsion_room.decorations" :style="'grid-row: ' + (Math.min(deco[1],deco[3])+1) + ' / ' + (Math.max(deco[1],deco[3])+2) + '; grid-column: ' + (Math.min(deco[0],deco[2])+1) + ' / ' + (Math.max(deco[0],deco[2])+2) + '; width: ' + (50 * Math.abs(deco[0]-deco[2])) + '%; height: ' + (50 * Math.abs(deco[1]-deco[3])) + '%'">
            </div>
          </div>
          <div class="robot_program-program">
            <p>{{ localize('program') }}</p>
            <div v-for="i in 8">
              <div v-if="player.locations.propulsion_room.program.length >= i" :class="'robot_program-processor-img processor-' + player.locations.propulsion_room.program[i-1]" @click="remove_processor_from_program(i-1)">
                <img class="bg" :src="img(player.locations.propulsion_room.program[i-1] == 'loop' ? 'processor_loop' : 'processor_base')">
                <img class="overlay" :src="img('top')">
              </div>
            </div>
          </div>
          <div class="robot_program-processor" v-for="(type, i) in LOCATIONS.propulsion_room.processor_types">
            <p class="robot_program-processor-name">{{ localize('processor-' + type) }}</p>
            <div :class="'robot_program-processor-img processor-' + type" @click="add_processor_to_program(type)">
              <img class="bg" :src="img(type == 'loop' ? 'processor_loop' : 'processor_base')">
              <img class="overlay" :src="img('top')">
            </div>
            <p class="robot_program-processor-desc">{{ localize('processor-' + type + '-desc') }}</p>
            <p :class="'robot_program-processor-cost ' + (has_amount_of_resource('cpu', get_processor_cost(type))?'':'lacking-resource')">
              {{ formatWhole(get_processor_cost(type)) }}x {{ localize('cpu') }}
            </p>
            <p class="robot_program-processor-amount">{{ formatWhole(player.locations.propulsion_room.processors[type].free) }}</p>
            <button @click="buy_processor(type)" :class="'robot_program-processor-buy ' + (has_amount_of_resource('cpu', get_processor_cost(type))?'':'disabled')">{{ localize('buy') }}</button>
          </div>
        </div>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.propulsion_room.unlock_progress >= 1" @click="unlock_location('propulsion_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function get_processor_cost(type) {
  return Math.round(Math.pow(2, Math.pow(player.locations.propulsion_room.processors[type].owned, 2)));
}

function buy_processor(type) {
  if (!has_amount_of_resource('cpu', get_processor_cost(type))) return;
  remove_resource('cpu', get_processor_cost(type));
  player.locations.propulsion_room.processors[type].owned += 1;
  player.locations.propulsion_room.processors[type].free += 1;
}

function run_robot_program_inner(robot_pos, program_pos, program_limit) {
  if (program_pos > program_limit) return;
  if (player.locations.propulsion_room.program[program_pos] == 'loop') {
    run_robot_program_inner(robot_pos, 0, program_pos - 1);
  }
  else {
    let dir = {
      left: {x: -1, y: 0},
      right: {x: 1, y: 0},
      top: {x: 0, y: -1},
      bottom: {x: 0, y: 1}
    };
    let new_pos = {
      x: robot_pos.x + dir[player.locations.propulsion_room.program[program_pos]].x,
      y: robot_pos.y + dir[player.locations.propulsion_room.program[program_pos]].y,
    };
    if (!(new_pos.x >= 0 && new_pos.x < 6 && new_pos.y >= 0 && new_pos.y < 6) || player.locations.propulsion_room.robot_program_instance[new_pos.x + new_pos.y * 6] == '#') {
      run_robot_program_inner(robot_pos, program_pos + 1, program_limit); 
      return;
    }
    player.locations.propulsion_room.decorations.splice(player.locations.propulsion_room.decorations.length, 1, [robot_pos.x, robot_pos.y, new_pos.x, new_pos.y]);
    robot_pos.x = new_pos.x;
    robot_pos.y = new_pos.y;
  }
  if (player.locations.propulsion_room.robot_program_instance[robot_pos.x + robot_pos.y * 6] == 'E') {
    player.locations.propulsion_room.unlock_progress = 1;
  }
  run_robot_program_inner(robot_pos, program_pos + 1, program_limit);
}

function run_robot_program() {
  player.locations.propulsion_room.decorations.splice(0);
  let robot_pos = {};
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if (player.locations.propulsion_room.robot_program_instance[x + y * 6] == 'S') {
        robot_pos.x = x;
        robot_pos.y = y;
      }
    }
  }
  run_robot_program_inner(robot_pos, 0, player.locations.propulsion_room.program.length - 1);
}

function add_processor_to_program(type) {
  if (player.locations.propulsion_room.processors[type].free <= 0) return;
  if (player.locations.propulsion_room.program.length >= 8) return;
  player.locations.propulsion_room.processors[type].free -= 1;
  player.locations.propulsion_room.program.splice(player.locations.propulsion_room.program.length, 1, type);
  run_robot_program();
}

function remove_processor_from_program(pos) {
  if (player.locations.propulsion_room.program.length <= pos) return;
  player.locations.propulsion_room.processors[player.locations.propulsion_room.program[pos]].free += 1;
  player.locations.propulsion_room.program.splice(pos, 1);
  run_robot_program();
}