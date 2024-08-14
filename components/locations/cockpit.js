Vue.component('location-cockpit',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'cockpit'">
      <p class="cockpit-lore" v-if="!player.locations.cockpit.energy_grid">{{ localize('cockpit-lore-1') }}</p>
      <template v-if="player.locations.cockpit.energy_grid">
        <p class="cockpit-lore">{{ localize('cockpit-lore-2') }}</p>
        <button class="minigame-finish-button" v-if="!player.machines.cockpit.warping" @click="player.machines.cockpit.warping = true">{{ localize('initiate-warp') }}</button>
        <div class="warp-countdown-outer" v-if="player.machines.cockpit.warping">
          <div class="warp-countdown" :style="'--filled-degree: ' + Math.min(360, 360 * player.machines.cockpit.stored_energy / WARP_REQUIREMENT) + 'deg'">
            <div class="warp-countdown-inner">
              <p style="font-size: 6rem">{{ localizeFormat('warp-requirement', {req: scientificFormat(WARP_REQUIREMENT, ' ', true)}) }}</p>
              <p style="font-size: 1.5rem">{{ localize('needed') }}</p>
              <p style="font-size: 1.5rem; margin-top: 0.5em" v-if="player.machines.cockpit.last_energy_transfer > 0 && player.machines.cockpit.stored_energy < WARP_REQUIREMENT * 0.999">{{ formatTime((WARP_REQUIREMENT - player.machines.cockpit.stored_energy) / player.machines.cockpit.last_energy_transfer) }} {{ localize('remaining') }}</p>
            </div>
          </div>
        </div>
        <p class="cockpit-lore" v-if="player.machines.cockpit.warping">{{ localize('cockpit-lore-3') }}</p>
      </template>
    </div>`
});