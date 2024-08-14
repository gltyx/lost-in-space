Vue.component('location-enhancement_room-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'enhancement_room-locked'">
      <p class='lock-desc'>{{ localize('location-enhancement_room-lock-desc') }}</p>
      <p style="text-align: left;"><span class='rules-header'>{{ localize('rules') }}</span></p>
      <div class='rules'>
        <p class='rules-desc'>{{ localize('decoder-desc') }}</p>
        <div class='rules-example'>
          <p style='text-align: left'>{{ localize('decoder-secret-passcode') }}</p>
          <div class='decoder-guess-holder'>
            <div><span>7</span></div>
            <div><span>2</span></div>
            <div><span>0</span></div>
            <div><span>9</span></div>
            <div><span>6</span></div>
          </div>
          <p style='text-align: left'>{{ localize('decoder-guess') }}</p>
          <div class='decoder-guess-holder'>
            <div class="correct-position"><span>7</span></div>
            <div class="correct-position"><span>2</span></div>
            <div><span>3</span></div>
            <div class="incorrect-position"><span>6</span></div>
            <div class="incorrect-position"><span>9</span></div>
          </div>
          <p style='text-align: left'>{{ localize('decoder-green') }}</p>
          <p style='text-align: right'>{{ localize('decoder-yellow') }}</p>
        </div>
      </div>
      <div class='minigame' v-show="player.locations.enhancement_room.unlock_progress < 1">
        <p class='action-desc'>{{ localize('decoder-action') }}</p>
        <div class='decoder-input-screen'>
          <div class='decoder-input-contents'>
            <div v-for='i in 5'>
              <span>{{ player.locations.enhancement_room.current_guess.length >= i ? player.locations.enhancement_room.current_guess[i-1] : '' }}</span>
            </div>
          </div>
          <button @click="decoder_input_digit(i - 1)" v-for="i in 10" :style="'grid-column: ' + (2 + (i - 1) % 5) + '; grid-row: ' + (i > 5 ? 2 : 1)">{{ i - 1 }}</button>
          <button @click="decoder_clear_input()" style="grid-row: 1 / 3; grid-column: 7">{{ localize('delete-input') }}</button>
          <button @click="decoder_submit_input()" :class="(has_amount_of_resource('memory_card', 1)?'':'disabled')" style="grid-row: 1 / 3; grid-column: 8">{{ localize('submit') }}</button>
        </div>
        <p class='action-desc'>{{ localize('decoder-past-guesses') }}</p>
        <div class="decoder-past-guesses">
          <div class="decoder-past-guess" v-for="i in player.locations.enhancement_room.guess_history.length">
            <p style="font-size: 2rem">{{ localizeFormat('decoder-guess-number', {guess: "" + i}) }}</p>
            <div class='decoder-guess-holder'> 
              <div v-for="j in 5" :class="(player.locations.enhancement_room.secret_passcode.indexOf(player.locations.enhancement_room.guess_history[i-1][j-1]) !== -1?'incorrect-position ':'') + (player.locations.enhancement_room.secret_passcode[j-1] == player.locations.enhancement_room.guess_history[i-1][j-1]?'correct-position ':'')"><span>{{ player.locations.enhancement_room.guess_history[i-1][j-1] }}</span></div>
            </div>
          </div>
        </div>
      </div>
      <button class="minigame-finish-button" v-if="player.locations.enhancement_room.unlock_progress >= 1" @click="unlock_location('enhancement_room')">{{ localize('open_the_door') }}</button>
    </div>`
});

function decoder_input_digit(digit) {
  if (player.locations.enhancement_room.current_guess.length < 5) {
    player.locations.enhancement_room.current_guess += digit;
  }
}

function decoder_clear_input() {
  player.locations.enhancement_room.current_guess = "";
}

function decoder_submit_input() {
  if (!has_amount_of_resource('memory_card', 1)) return;
  if (player.locations.enhancement_room.current_guess.length == 5) {
    player.resources['memory_card'] -= 1;
    if (player.locations.enhancement_room.current_guess == player.locations.enhancement_room.secret_passcode) {
      player.locations.enhancement_room.unlock_progress = 1;
    }
    player.locations.enhancement_room.guess_history.splice(player.locations.enhancement_room.guess_history.length, 0, player.locations.enhancement_room.current_guess);
    player.locations.enhancement_room.current_guess = "";
  }
}