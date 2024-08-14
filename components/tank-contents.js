Vue.component('tank-element',{
  props: ['value', 'element'],
  template:`
    <div :class="'tank-elements-' + element" :style="'flex-grow: ' + value + '; flex-shrink: 0; flex-basis: 0'">
      <p class="tank-element-value" v-if="value > 0.2 * get_total_tank_volume()">{{ localize("tank_" + element) }}: {{ format(Math.round(value) / (get_total_tank_volume() / 100)) }}%</p>
    </div>`
});

Vue.component('tank-contents',{
  template:`
    <div class='tank-contents'>
       <tank-element v-for="(value, element) in player.tank" :value="value" :element="element">
       </tank-element>
    </div>`
});