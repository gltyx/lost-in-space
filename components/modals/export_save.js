Vue.component('modal-export_save',{
  template:`
    <div class='modal' v-if="player.current_modal == 'export_save'">
      <div class='modal-inner'>
        <p class='modal-text'>{{ localize('export_save-helper') }}</p>
        <textarea readonly style="flex-grow: 1">{{ tmp.modal_save }}</textarea>
        <button class='modal-close' @click="event.stopPropagation(); player.current_modal=''">{{ localize('close') }}</button>
      </div>
    </div>`
});