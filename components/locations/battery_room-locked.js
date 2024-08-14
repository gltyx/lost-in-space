Vue.component('location-battery_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'battery_room-locked'">
      <p class='lock-desc'>{{ localize('location-battery_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('sudoku-desc') }}</p>
        <div class='rules-example'>
          <div style="display: flex; gap: 2em; align-items: center; justify-content: center">
            <p style="font-size: 2.25rem">{{ localize('sudoku-rules-example') }}</p>
            <div style="display: grid; width: 20rem; grid-template-columns: 1fr repeat(3, 3fr) 1fr">
              <div v-for="x in 5" style="display: grid; grid-template-rows: 1fr repeat(3, 3fr) 1fr">
                <div :class="'sudoku-square '+ (x == 3 && y == 3 ? 'wrong ' : '') + (x != 3 || (y < 2 || y > 3) ? 'initial ' : '') + ((x > 1 && x < 5) ^ (y > 1 && y < 5) ? 'odd' : 'even')" :style="'position: relative; ' + (x > 1 && x < 5 && y > 1 && y < 5 ? 'aspect-ratio: 1; ' : '') + (x > 1 ? 'border-left: 2px solid white; ' : 'border-left: none; ') + (x < 5 ? 'border-right: 2px solid white; ' : 'border-right: none; ') + (y > 1 ? 'border-top: 2px solid white; ' : 'border-top: none; ') + (y < 5 ? 'border-bottom: 2px solid white; ' : 'border-bottom: none; ')" v-for="y in 5">
                  <p v-if="x > 1 && x < 5 && y > 1 && y < 5">{{ ("45.12...2"[(x-2) * 3 + (y-2)] != "." ? "45.12...2"[(x-2) * 3 + (y-2)] : "") }}</p>
                  <img v-if="x == 3 && y == 3" :src="img('cursor')" style="position: absolute; bottom: 0.5rem; right: 0.5rem; width: 2rem; height: 2rem">
                </div>
              </div>
            </div>
          </div>
          <p style='text-align: right'>{{ localize('sudoku-wrong') }}</p>
        </div>
      </div>
      <div class='minigame' v-show="player.locations.battery_room.unlock_progress < 1">
        <p class='action-desc'>{{ localizeFormat('sudoku-action', { memory_cards: formatWhole(player.resources.memory_card), input_digit: formatWhole(sudoku_get_input_digit()) }) }}</p>
        <div class='sudoku-grid'>
          <div v-for="x in 9" class='sudoku-column'>
            <div v-for="y in 9" :class="'sudoku-square ' + ((Math.floor((x - 0.5) / 3) + Math.floor((y - 0.5) / 3)) % 2 == 0 ? 'even ' : 'odd ') + (player.locations.battery_room.sudoku[(x-1) * 9 + (y-1)] != '.' ? 'initial ' : (player.locations.battery_room.sudoku_state[(x-1) * 9 + (y-1)] != '.' && !validate_sudoku_digit(x - 1, y - 1) ? 'wrong ' : ''))" @click="sudoku_write_digit(x-1, y-1)">
              <p>{{ (player.locations.battery_room.sudoku_state[(x-1) * 9 + (y-1)] != '.' ? player.locations.battery_room.sudoku_state[(x-1) * 9 + (y-1)] : '') }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.battery_room.unlock_progress >= 1" @click="unlock_location('battery_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function sudoku_get_input_digit() {
  return Math.round(player.resources.memory_card % 10) % 10;
}

function sudoku_write_digit(x, y) {
  if (player.locations.battery_room.sudoku[x * 9 + y] != '.') return;
  Vue.set(player.locations.battery_room.sudoku_state, x * 9 + y, sudoku_get_input_digit());
  let sudoku_complete = true;
  for (let x0 = 0; x0 < 9; x0++) {
    for (let y0 = 0; y0 < 9; y0++) {
      if (player.locations.battery_room.sudoku_state[x0 * 9 + y0] == '.' || player.locations.battery_room.sudoku_state[x0 * 9 + y0] == '0') sudoku_complete = false;
      else if (player.locations.battery_room.sudoku[x0 * 9 + y0] == '.') {
        if (!validate_sudoku_digit(x0, y0)) sudoku_complete = false;
      }
    }
  }
  if (sudoku_complete) {
    player.locations.battery_room.unlock_progress = 1;
  }
}

function validate_sudoku_digit(x, y) {
  if (player.locations.battery_room.sudoku_state[x * 9 + y] == '0') return false;
  for (let x0 = 0; x0 < 9; x0++) {
    if (x0 != x && player.locations.battery_room.sudoku_state[x0 * 9 + y] == player.locations.battery_room.sudoku_state[x * 9 + y]) return false;
  }
  for (let y0 = 0; y0 < 9; y0++) {
    if (y0 != y && player.locations.battery_room.sudoku_state[x * 9 + y0] == player.locations.battery_room.sudoku_state[x * 9 + y]) return false;
  }
  let sq_x = Math.floor((x + 0.5) / 3);
  let sq_y = Math.floor((y + 0.5) / 3);
  for (let x0 = 3 * sq_x; x0 < 3 * sq_x + 3; x0++) {
    for (let y0 = 3 * sq_y; y0 < 3 * sq_y + 3; y0++) {
      if ((x0 != x || y0 != y) && player.locations.battery_room.sudoku_state[x0 * 9 + y0] == player.locations.battery_room.sudoku_state[x * 9 + y]) return false;
    }
  }
  return true;
}