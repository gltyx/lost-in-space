Vue.component('location-cockpit-locked',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'cockpit-locked'">
      <p class='lock-desc'>{{ localize('location-cockpit-lock-desc-1') }}</p>
      <p class='lock-desc'>{{ localize('location-cockpit-lock-desc-2') }}</p>
      <p class='lock-desc'>{{ localize('location-cockpit-lock-desc-3') }}</p>
      <button :class="'minigame-finish-button ' + (has_amount_of_resource('keycard', 1) ? '' : 'disabled ')" @click="if (has_amount_of_resource('keycard', 1)) { unlock_location('cockpit') }">{{ localize('open_the_door') }}</button>
    </div>`
});