Vue.component('location-oxygen_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'oxygen_room-locked'">
      <p class='lock-desc'>{{ localize('location-oxygen_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('labyrinth-desc') }}</p>
        <div class='rules-example'>
          <p style="text-align: left">{{ localize('labyrinth-gray-cells') }}</p>
          <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 1em">
            <div class="labyrinth-grid" style="--rows: 4; --columns: 3">
              <div>
                <div class="labyrinth-cell unknown"></div><div class="labyrinth-cell unknown"></div><div class="labyrinth-cell unknown"></div>
              </div>
              <div>
                <div class="labyrinth-cell unknown"></div><div class="labyrinth-cell"></div><div class="labyrinth-cell unknown"></div>
              </div>
              <div>
                <div class="labyrinth-cell wall"></div><div class="labyrinth-cell"><img class="robot" :src="img('robot', 'svg')"></div><div class="labyrinth-cell wall"></div>
              </div>
              <div>
                <div class="labyrinth-cell"></div><div class="labyrinth-cell"><img class="beacon" :src="img('beacon')"></div><div class="labyrinth-cell wall"></div>
              </div>
            </div>
            <div style="align-self: center;">
              <p style="font-size: 4rem">🠒</p>
              <p style="font-size: 1.5rem">{{ localize('labyrinth-example-cost') }}</p>
            </div>
            <div class="labyrinth-grid" style="--rows: 4; --columns: 3">
              <div>
                <div class="labyrinth-cell unknown"></div><div class="labyrinth-cell wall"></div><div class="labyrinth-cell unknown"></div>
              </div>
              <div>
                <div class="labyrinth-cell wall"></div><div class="labyrinth-cell"><img class="robot" :src="img('robot', 'svg')"></div><div class="labyrinth-cell"></div>
              </div>
              <div>
                <div class="labyrinth-cell wall"></div><div class="labyrinth-cell"><img class="beacon" :src="img('beacon')"></div><div class="labyrinth-cell wall"></div>
              </div>
              <div>
                <div class="labyrinth-cell"></div><div class="labyrinth-cell"><img class="beacon" :src="img('beacon')"></div><div class="labyrinth-cell wall"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='minigame' v-show="player.locations.oxygen_room.unlock_progress < 1">
        <p class='action-desc'>{{ (player.resources.beacon > 0 ? localize('labyrinth-action') : localize('labyrinth-lack-resources')) }}</p>
        <p class="labyrinth-marker">{{ localize('entrance') }}</p>
        <div class='labyrinth-grid' :style="'--rows: ' + LOCATIONS.oxygen_room.labyrinth_height + '; --columns: ' + LOCATIONS.oxygen_room.labyrinth_width">
          <div v-for="y in LOCATIONS.oxygen_room.labyrinth_height">
            <div @click="labyrinth_move_to(x-1, y-1)" :class="'labyrinth-cell ' + (labyrinth_is_cell_visible(x-1,y-1)?'':'unknown ') + (player.locations.oxygen_room.labyrinth[(y-1)*LOCATIONS.oxygen_room.labyrinth_width + (x-1)] == '#'?'wall ':'') + (player.locations.oxygen_room.labyrinth_visits[x-1][y-1] > 0 || (player.locations.oxygen_room.labyrinth_pos.x == x-1 && player.locations.oxygen_room.labyrinth_pos.y == y-1)?'with-item ':'')" v-for="x in LOCATIONS.oxygen_room.labyrinth_width">
              <img class="beacon" :src="img('beacon')" v-if="player.locations.oxygen_room.labyrinth_visits[x-1][y-1] > 0">
              <img class="robot" :src="img('robot', 'svg')" v-if="player.locations.oxygen_room.labyrinth_pos.x == x-1 && player.locations.oxygen_room.labyrinth_pos.y == y-1">
            </div>
          </div>
        </div>
        <p class="labyrinth-marker">{{ localize('exit') }}</p>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.oxygen_room.unlock_progress >= 1" @click="unlock_location('oxygen_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function labyrinth_is_cell_visible(x, y) {
  let dir = [[0, 0], [-1, 0], [0, -1], [1, 0], [0, 1]];
  for (let i in dir) {
    let x0 = x + dir[i][0];
    let y0 = y + dir[i][1];
    if (player.locations.oxygen_room.labyrinth_pos.x == x0 && player.locations.oxygen_room.labyrinth_pos.y == y0) {
      return true;
    }
    if (x0 >= 0 && y0 >= 0 && x0 < LOCATIONS.oxygen_room.labyrinth_width && y0 < LOCATIONS.oxygen_room.labyrinth_height && player.locations.oxygen_room.labyrinth_visits[x0][y0] > 0) {
      return true;
    }
  }
  return false;
}

function labyrinth_move_to(x, y) {
  if (!has_amount_of_resource('beacon', 1)) return;
  if (!labyrinth_is_cell_visible(x, y)) return;
  if (player.locations.oxygen_room.labyrinth[y * LOCATIONS.oxygen_room.labyrinth_width + x] == '#') return;
  if (player.locations.oxygen_room.labyrinth_pos.x == x && player.locations.oxygen_room.labyrinth_pos.y == y) return;
  if (player.locations.oxygen_room.labyrinth_visits[x][y] > 0) return;
  
  remove_resource('beacon', 1);
  Vue.set(player.locations.oxygen_room.labyrinth_visits[player.locations.oxygen_room.labyrinth_pos.x], player.locations.oxygen_room.labyrinth_pos.y, 1);
  player.locations.oxygen_room.labyrinth_pos.x = x;
  player.locations.oxygen_room.labyrinth_pos.y = y;
  
  if (x == LOCATIONS.oxygen_room.labyrinth_exit.x && y == LOCATIONS.oxygen_room.labyrinth_exit.y) {
    player.locations.oxygen_room.unlock_progress = 1;
  }
}

