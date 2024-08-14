Vue.component('modal-credits',{
  template:`
    <div class='modal' v-if="player.current_modal == 'credits'">
      <div class='modal-inner'>
        <p class='modal-small-header'>{{ localize('programming') }}</p>
        <p class='modal-text'>Semenar</p>
        <p class='modal-text'>3^3=7</p>
        <p class='modal-small-header'>{{ localize('idea') }}</p>
        <p class='modal-text'>IznirLafrite</p>
        <p class='modal-text'>Classified39</p>
        <div class='header-delimitor'></div>
        <button class='modal-close' @click="event.stopPropagation(); player.current_modal=''">{{ localize('close') }}</button>
      </div>
    </div>`
});