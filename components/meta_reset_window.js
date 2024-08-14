Vue.component('meta_reset_window',{
  template:`
    <div v-show="player.current_screen == 'meta_reset'" style="flex-grow: 1">
      <p class="location-header">{{ localize('you_died') }}</p>
      <p class="meta-reset-description">{{ localize('meta_reset-desc') }}</p>
      <p class="meta-reset-resource-income">{{ formatWhole(player.last_experience_gain) }}</p>
      <p class="meta-reset-resource-name">{{ localize('experience') }}</p>
      <p class="meta-reset-description">{{ localize('meta_reset-desc-cont') }}</p>
      <button class="meta-reset-resurrect" @click="event.stopPropagation(); meta_reset();">{{ localize('resurrect') }}</button>
      <p class="meta-reset-description">{{ localize('you_have') }} {{ formatWhole(player.resources.experience) }} {{ localize('experience') }}.</p>
      <upgrade-list group="meta_reset" rows="4"></upgrade-list>
    </div>`
});