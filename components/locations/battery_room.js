Vue.component('location-battery_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'battery_room'">
      <machine-header name="battery_array"></machine-header><br>
      <div v-if="get_battery_array_energy_capacity() > 0" class="printer-storage-bar">
         <div class="filled" :style="'width: ' + (100 * player.machines.battery_array.stored_energy / get_battery_array_energy_capacity()) + '%'"></div>
         <p style="font-size:1.5rem;position:relative; top:-1em">{{scientificFormat(player.machines.battery_array.stored_energy, ' ')}}Wh/{{scientificFormat(get_battery_array_energy_capacity(), ' ')}}Wh</p>
      </div>
      <p class="battery_array-accumulator-effect">{{ localizeFormat('battery_array-accumulator-effect', {effect: scientificFormat(get_battery_array_accumulator_effect(), ' ')}) }}</p>
      <div class="battery_array-insertion">
        <p>{{ localize('insert') }}</p>
        <button @click="add_accumulators_to_battery_array()">{{ localize('all') }}</button>
        <button @click="add_accumulators_to_battery_array(Math.round(Math.pow(10, i - 1)))" v-for="i in 4" v-show="has_amount_of_resource('accumulator', Math.round(Math.pow(10, i - 1)))">{{ formatWhole(Math.round(Math.pow(10, i - 1))) }}</button>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="battery_array" rows="2"></upgrade-list>
    </div>`
});

function get_battery_array_accumulator_effect() {
  let base_capacity = 1e5;
  base_capacity *= player.upgrades.high_density_storage.effect;
  return base_capacity;
}

function get_battery_array_energy_capacity() {
  let base_capacity = get_battery_array_accumulator_effect() * player.machines.battery_array.accumulators;
  return base_capacity;
}

function add_accumulators_to_battery_array(amount=player.resources.accumulator) {
  if (!has_amount_of_resource('accumulator', amount)) return;
  remove_resource('accumulator', amount);
  player.machines.battery_array.accumulators += amount;
}