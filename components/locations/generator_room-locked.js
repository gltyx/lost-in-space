Vue.component('location-generator_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'generator_room-locked'">
      <p class='lock-desc'>{{ localize('location-generator_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('bullseye-desc') }}</p>
        <div class='rules-example'>
          <p style='text-align: left'>{{ localize('bullseye-undershoot') }}</p>
          <div class='bullseye-field'>
            <div class='bullseye-zone' style='width: 50%; margin-left: 21%'></div>
          </div>
          <p style='text-align: right'>{{ localize('bullseye-overshoot') }}</p>
        </div>
      </div>
      <p class="minigame-progress-desc">{{ localizeFormat('minigame-progress', {percentage: 20 * player.locations.generator_room.unlock_progress}) }}</p>
      <div class="minigame-progress-bar" style="grid-template-columns: repeat(5, 1fr)">
        <div :class="'minigame-progress ' + (player.locations.generator_room.unlock_progress >= progress ? 'completed ':'')" v-for="progress in 5"></div>
      </div>
      <div class='minigame' v-show="player.locations.generator_room.unlock_progress < 5 && player.resources.crowbar > 0">
        <p class='action-desc'>{{ localize('bullseye-action') }}</p>
        <div class='bullseye-field'>
          <div class='bullseye-zone' :style="'width: ' + (100 * LOCATIONS.generator_room.bullseye_data[player.locations.generator_room.unlock_progress].width) + '%; margin-left: ' + (100 * LOCATIONS.generator_room.bullseye_data[player.locations.generator_room.unlock_progress].left) + '%'"></div>
          <div class='bullseye-target' :style="'left: ' + bullseye_get_ball_position() +  '%'"></div>
        </div>
        <button @click="bullseye_minigame_process_click()">{{ localize('stop') }}</button>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.generator_room.unlock_progress >= 5" @click="unlock_location('generator_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function bullseye_get_ball_position() {
  return Math.abs((Math.round(player.last_tick / (LOCATIONS.generator_room.bullseye_data[player.locations.generator_room.unlock_progress].speed)) % 200) - 100);
}

function bullseye_minigame_process_click() {
  let window_left = LOCATIONS.generator_room.bullseye_data[player.locations.generator_room.unlock_progress].left;
  let window_right = window_left + LOCATIONS.generator_room.bullseye_data[player.locations.generator_room.unlock_progress].width;
  let ball_x = bullseye_get_ball_position() / 100;
  
  if (ball_x < window_left) {
    player.locations.generator_room.unlock_progress = 0;
  }
  else if (ball_x > window_right) {
    player.resources.crowbar -= 1;
  }
  else {
    player.locations.generator_room.unlock_progress += 1;
  }
}