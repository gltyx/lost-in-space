Vue.component('modal-congratulations',{
  template:`
    <div class='modal' v-if="player.current_modal == 'congratulations'">
      <div class='modal-inner'>
        <p class='modal-header'>{{ localize('you-won') }}</p>
        <p class='modal-text'>{{ localize('you-won-desc') }}</p>
        <p class='modal-text'>{{ localizeFormat('you-won-deaths', {deaths: formatWhole(player.total_deaths)}) }}</p>
        <p class='modal-text'>{{ localize('you-won-time-taken-1') }}</p>
        <p class='modal-small-header'>{{ formatTime((player.won_tick - player.first_tick) / 1000) }}</p>
        <p class='modal-text'>{{ localize('you-won-time-taken-2') }}</p>
        <div class='header-delimitor'></div>
        <button class='modal-close' @click="event.stopPropagation(); player.current_modal=''">{{ localize('close') }}</button>
      </div>
    </div>`
});