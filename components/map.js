Vue.component('map-location',{
  props: ["name"],
  template:`
    <div v-show="unwrap(LOCATIONS[name].unlock, true)" :class="'map-location ' + (player.locations[name].unlocked?'':'locked ') + (player.current_location==name?'current ':'')" :style="'grid-row: ' + LOCATIONS[name].y + '/' + (LOCATIONS[name].y + LOCATIONS[name].height) + '; grid-column: ' + LOCATIONS[name].x + '/' + (LOCATIONS[name].x + LOCATIONS[name].width)" @click="go_to_location(name)">
      <p :class="'map-location-name ' + (LOCATIONS[name].width <= 2 ? 'vertical ' : '')">{{ localize('location-' + name) }}</p>
      <img class="map-location-grid-icon" v-if="player.locations[name].energy_grid" :src="img('energy_grid', 'svg')">
    </div>`
});

Vue.component('map-section',{
  template:`
    <div class='map-section'>
      <p class='section-title'>{{ localize('map') }}</p>
      <div v-if="player.locations.battery_room.unlocked && get_battery_array_energy_capacity() > 0">
        <p class="personal-battery">{{ localize('location-battery_room') }}: {{ scientificFormat(player.machines.battery_array.stored_energy, ' ') }}Wh {{ localize('remaining') }}</p>
        <div class="personal-battery-bar">
          <div class="filled" :style="'width: ' + (100 * player.machines.battery_array.stored_energy / get_battery_array_energy_capacity()) + '%'"></div>
        </div>
      </div>
      <div class='map-grid'>
        <div style="grid-row: 1; grid-column: 1; aspect-ratio: 1"></div>
        <map-location v-for="(value, key) in LOCATIONS" v-if="unwrap(value.show_on_map, true)" :name="key">
        </map-location>
      </div>
    </div>`
});