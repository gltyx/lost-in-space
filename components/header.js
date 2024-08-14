Vue.component('game-header',{
  template:`
    <div class='header'>
      <p class='title'>{{ player.won ? localize('game-title-gimmick-' + player.gimmick) : localize('game-title') }}</p>
      <div class='header-delimitor'></div>
      <p class='header-option' @click='event.stopPropagation(); player.current_modal="credits";'>{{localize('credits')}}</p>
      <p class='header-option' @click='event.stopPropagation(); tmp.modal_save = btoa(JSON.stringify(player)); player.current_modal="export_save";'>{{localize('export-save-top')}}<br>{{localize('export-save-bottom')}}</p>
      <p class='header-option' @click='event.stopPropagation(); importSave();'>{{localize('import-save-top')}}<br>{{localize('import-save-bottom')}}</p>
      <p class='header-option' @click='event.stopPropagation(); hardReset();'>{{localize('hard-reset-top')}}<br>{{localize('hard-reset-bottom')}}</p>
    </div>`
});