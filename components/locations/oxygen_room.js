Vue.component('location-oxygen_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'oxygen_room'">
      <machine-header name="oxygen_generator"></machine-header>
      <div class="oxygen-generator">
        <div class="upgrade-locked" v-if="!(player.locations.oxygen_room.energy_grid && player.locations.battery_room.energy_grid)" style="grid-row: 1 / 3; grid-column: 1 / 3">
          <img :src="img('lock')">
          <p class="unlock-tip">{{ localize('oxygen-generator-cannot-hover') }}</p>
        </div>
        <template v-if="player.locations.oxygen_room.energy_grid && player.locations.battery_room.energy_grid">
          <p class="oxygen-generator-stats-title">{{ localize('statistics') }}</p>
          <div class="oxygen-generator-stats">
            <p>{{ localizeFormat('oxygen-generator-speed', {speed: 100 * get_oxygen_recharge_rate() / get_total_tank_volume()}) }}</p>
            <p>{{ localizeFormat('oxygen-generator-consumption', {energy: scientificFormat(get_oxygen_recharge_consumption(), ' ')}) }}</p>
            <p>{{ localizeFormat('oxygen-generator-efficiency', {efficiency: 100 * get_oxygen_recharge_efficiency()}) }}</p>
          </div>
          <div class="oxygen-generator-hover" @mouseenter="player.machines.oxygen_generator.hover = true" @mouseleave="player.machines.oxygen_generator.hover = false">
            <p>{{ localize('oxygen-generator-hover') }}</p>
          </div>
        </template>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="oxygen_generator" rows="2"></upgrade-list>
    </div>`
});

function get_oxygen_recharge_rate() {
  let base = 10;
  base *= player.upgrades.oxygen_generator_throughput.effect;
  base *= player.upgrades.vacuum_chamber.effect;
  return base;
}

function get_oxygen_recharge_efficiency() {
  let base = player.upgrades.better_isolation.effect / 100;
  return base;
}

function get_oxygen_recharge_consumption() {
  let base = 121e9;
  base *= player.upgrades.oxygen_generator_insulation.effect;
  return base;
}