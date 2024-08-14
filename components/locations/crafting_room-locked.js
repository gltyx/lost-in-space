Vue.component('location-crafting_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'crafting_room-locked'">
      <p class='lock-desc'>{{ localize('location-crafting_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('water_puzzle-desc') }}</p>
        <div class='rules-example'>
          <div style="display: flex; gap: 0.5em; width: 100%">
            <div class='water_puzzle-section' style='--water-height: 4'>
              <div class='water_puzzle-section-water' style='--water-height: 3'>
                <p>3 {{ localize('decaliter') }}</p>
              </div>
            </div>
            <div class='water_puzzle-section' style='--water-height: 6'>
              <div class='water_puzzle-section-water' style='--water-height: 4'>
                <p>4 {{ localize('decaliter') }}</p>
              </div>
            </div>
            <div style="align-self: center;">
              <p style="font-size: 4rem">🠒</p>
              <p style="font-size: 1.5rem">{{ localize('water_puzzle-example-cost') }}</p>
            </div>
            <div class='water_puzzle-section' style='--water-height: 4'>
              <div class='water_puzzle-section-water' style='--water-height: 1'>
                <p>1 {{ localize('decaliter') }}</p>
              </div>
            </div>
            <div class='water_puzzle-section' style='--water-height: 6'>
              <div class='water_puzzle-section-water' style='--water-height: 6'>
                <p>6 {{ localize('decaliter') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='minigame' v-show="player.locations.crafting_room.unlock_progress < 1">
        <p class='action-desc'>{{ localize('water_puzzle-action') }}</p>
        <div class='water_puzzle-desc'>
          <div class='water_puzzle-section' v-for="i in 3" :style="'--water-height: ' + player.locations.crafting_room.water_puzzle[i-1]">
            <div class='water_puzzle-section-water' :style="'--water-height: ' + player.locations.crafting_room.water_puzzle_state[i-1]">
              <p v-show="player.locations.crafting_room.water_puzzle_state[i-1] > 0">{{player.locations.crafting_room.water_puzzle_state[i-1]}} {{ localize('decaliter') }}</p>
            </div>
            <div v-if="i==3" style="position: absolute; width: 100%; left: 0; bottom: 1.5em; border-bottom: 2px white dashed"></div>
          </div>
          <p class='water_puzzle-section-desc' v-for="i in 3">
            {{ localize('water_puzzle-section-' + i) }}<br>
            {{ localizeFormat('water_puzzle-volume', {volume: formatWhole(player.locations.crafting_room.water_puzzle[i-1])}) }}
          </p>
          <button v-for="i in 3" @click="water_puzzle_transfer(i - 1, i % 3)" :class="'water_puzzle-transfer ' + ((water_puzzle_get_transfer_amount(i - 1, i % 3) == 0 || !has_amount_of_resource('pipe', water_puzzle_get_transfer_amount(i - 1, i % 3))) ?'disabled':'')">
            {{ localizeFormat('water_puzzle-transfer', {amount: formatWhole(water_puzzle_get_transfer_amount(i - 1, i % 3)), to: localize('water_puzzle-section-' + ((i % 3) + 1))}) }}<br>
            {{ formatWhole(water_puzzle_get_transfer_amount(i - 1, i % 3)) }}x {{ localize('pipe') }}
          </button>
          <button v-for="i in 3" @click="water_puzzle_transfer(i - 1, (i+1) % 3)" :class="'water_puzzle-transfer ' + ((water_puzzle_get_transfer_amount(i - 1, (i+1) % 3) == 0 || !has_amount_of_resource('pipe', water_puzzle_get_transfer_amount(i - 1, (i+1) % 3))) ?'disabled':'')">
            {{ localizeFormat('water_puzzle-transfer', {amount: formatWhole(water_puzzle_get_transfer_amount(i - 1, (i+1) % 3)), to: localize('water_puzzle-section-' + (((i+1) % 3) + 1))}) }}<br>
            {{ formatWhole(water_puzzle_get_transfer_amount(i - 1, (i+1) % 3)) }}x {{ localize('pipe') }}
          </button>
        </div>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.crafting_room.unlock_progress >= 1" @click="unlock_location('crafting_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function water_puzzle_get_transfer_amount(input, output) {
  return Math.min(player.locations.crafting_room.water_puzzle_state[input], player.locations.crafting_room.water_puzzle[output] - player.locations.crafting_room.water_puzzle_state[output]);
}

function water_puzzle_transfer(input, output) {
  let transfer_amount = water_puzzle_get_transfer_amount(input, output);
  if (!has_amount_of_resource('pipe', transfer_amount)) return;
  if (transfer_amount == 0) return;
  remove_resource('pipe', transfer_amount);
  Vue.set(player.locations.crafting_room.water_puzzle_state, input, player.locations.crafting_room.water_puzzle_state[input] - transfer_amount);
  Vue.set(player.locations.crafting_room.water_puzzle_state, output, player.locations.crafting_room.water_puzzle_state[output] + transfer_amount);
  if (player.locations.crafting_room.water_puzzle_state[2] == 1) {
    player.locations.crafting_room.unlock_progress = 1;
  }
}