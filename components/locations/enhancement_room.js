Vue.component('location-enhancement_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'enhancement_room'">
      <machine-header name="suit_enhancer"></machine-header>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="enhancement" rows="2"></upgrade-list>
    </div>`
});