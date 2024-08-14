Vue.component('printer_recipe',{
  props: ["name"],
  template:`
    <div class="printable-object">
      <p class="printable-object-name">{{ localize(name) }}</p>
      <img class="printable-object-image" :src="img(unwrap(PRINTER_RECIPES[name].img, name))">
    
      
      <p class="printable-object-time-cost">{{ formatTime(get_recipe_time_cost(name) / 1000) }}</p>
      
      <div class="printable-object-cost">
        <p :class="'printable-object-energy-cost ' + ((get_total_printer_energy() >= get_recipe_energy_cost(name))?'':'lacking-resource')">{{ scientificFormat(get_recipe_energy_cost(name), " ") }}Wh</p>
        <div class="printable-object-resource-costs">
          <p :class="'printable-object-resource-cost ' + (has_amount_of_resource(key, value)?'':'lacking-resource')" v-for="(value, key) in unwrap(PRINTER_RECIPES[name].extra_cost, {})">
            {{ formatWhole(value) }}x {{ localize(key) }}
          </p>
        </div>
      </div>
      <div class="print-object-buy">
        <button :style="'width: '+(player.upgrades.automation.level>=1?'60':'100')+'%'" :class="'print-object-button ' + (!can_print_item(name)?'disabled':'')" @click="print_item(name)">{{ localize('print') }}</button>
        <button v-if="player.upgrades.automation.level>=1" style="width:40%" :class="'print-auto-button-'+(player.machines.printer.recipe_settings[name].auto_repeat?'opened':'closed')" @click="auto_item(name)">{{localize('auto')}}</button>
      </div>
    </div>`
});

Vue.component('location-workshop_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'workshop_room'">
      <machine-header name="3d-printer"></machine-header>
      <div class='printer-storage-data' v-if="player.upgrades.extra_accumulator_print.effect>0">
      <div class="printer-storage-bar">
       <div class="filled" :style="'width: ' + (100 * player.machines.printer.stored_energy / get_printer_energy_capacity()) + '%'"></div>
       <p style="font-size:1.5rem;position:relative; top:-1em">{{scientificFormat(player.machines.printer.stored_energy, ' ')}}Wh/{{scientificFormat(get_printer_energy_capacity(), ' ')}}Wh</p>
      </div>
       <button class="printer-storage-transfer" @click="transfer_energy_printer()">{{ localize('transfer_energy_printer') }}</button>   
      </div>
      <div class="current-print-job">
        <p class="current-print-job-name">{{ localize('currently-printing') }}{{ (player.machines.printer.current_job !== null ? (': ' + localize(player.machines.printer.current_job)) : (' ' + localize('nothing'))) }}</p>
        <p class="current-print-job-time-left" v-show="player.machines.printer.current_job !== null">{{(player.machines.printer.ends_at !== null ? formatTime((player.machines.printer.ends_at - player.last_tick) / 1000) : '') + ' ' + localize('remaining')}}</p>
        <div class="current-print-job-progress-bar" v-show="player.machines.printer.current_job !== null">
          <div class="time-passed" :style="'flex-grow: ' + (player.last_tick - player.machines.printer.starts_at)"></div>
          <div class="time-remaining" :style="'flex-grow: ' + (player.machines.printer.ends_at - player.last_tick)"></div>
        </div>
     </div>
      <div class='printable-objects'>
        <printer_recipe v-for="(value, key) in PRINTER_RECIPES" v-show="unwrap(value.unlock, true)" :name="key">
        </printer_recipe>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="printer" rows="2"></upgrade-list>
    </div>`
});

function transfer_energy_printer(){
  let orginal_energy=player.machines.printer.stored_energy
  player.machines.printer.stored_energy=Math.min(player.machines.printer.stored_energy+player.resources.personal_battery,unwrap(get_printer_energy_capacity()))
  player.resources.personal_battery=player.resources.personal_battery-(player.machines.printer.stored_energy-orginal_energy)
}
function get_printer_energy_capacity() {
  let base_capacity = 1e5;
  base_capacity*=player.upgrades.extra_accumulator_print.effect
  return base_capacity;
}
function auto_item(name){
  player.machines.printer.recipe_settings[name].auto_repeat = !player.machines.printer.recipe_settings[name].auto_repeat;
}