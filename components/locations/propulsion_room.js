Vue.component('location-propulsion_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'propulsion_room'">
      <machine-header name="propulsion"></machine-header>
      <p class="propulsion-effect">{{ localizeFormat('propulsion-effect', {effect: get_propulsion_effect() })}}</p>
      <div class="propulsion-selection">
        <div class="propulsion-star-list">
          <button @click="player.machines.propulsion.selected_star = choice" :class="player.machines.propulsion.selected_star == choice ? 'disabled selected' : ''" v-for="choice in player.locations.propulsion_room.star_selection" @mouseenter="player.machines.propulsion.hovered_star = choice" @mouseleave="player.machines.propulsion.hovered_star = null">
            {{ localize('propulsion-select-star') }}<br>{{ GENERATOR_ROOM_SOURCES[choice].name }}
          </button>
        </div>
        <div>
          <p class="propulsion-preview-title">{{ localize('preview') }}</p>
          <div class='propulsion-preview'>
            <div :class="'star star-' + source.type + ' ' + ((player.machines.propulsion.hovered_star !== null ? player.machines.propulsion.hovered_star : player.machines.propulsion.selected_star) == i ? 'selected ' : '')" :style="'width: ' + star_size(source) + '%; height: ' + (2 * star_size(source)) + '%; left: ' + (100 * source.x - star_size(source) / 2) + '%; top: ' + (100 * source.y - star_size(source)) + '%'" v-for="(source, i) in GENERATOR_ROOM_SOURCES"></div>
          </div>
        </div>
      </div>
      <div class="propulsion-reroll">
        <div class="upgrade-locked" v-if="!(player.locations.propulsion_room.energy_grid && player.locations.battery_room.energy_grid)">
          <img :src="img('lock')">
          <p class="unlock-tip">{{ localize('propulsion-cannot-reroll') }}</p>
        </div>
        <button @click="reroll_star_selection()" :class="player.machines.battery_array.stored_energy >= get_propulsion_reroll_cost() ? '' : 'disabled'" v-if="player.locations.propulsion_room.energy_grid && player.locations.battery_room.energy_grid">
          {{ localize('reroll-star-selection') }}<br>{{ localizeFormat('reroll-star-selection-cost', {cost: scientificFormat(get_propulsion_reroll_cost(), ' ')}) }}
        </button>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="propulsion" rows="2"></upgrade-list>
    </div>`
});

function get_propulsion_effect() {
  let base = 4;
  base *= player.upgrades.propulsion_effectiveness.effect;
  return base;
}

function get_propulsion_reroll_cost() {
  let base = 1e6;
  base *= Math.pow(2, player.machines.propulsion.rerolls * player.upgrades.propulsion_cheaper_rerolls.effect);
  return base;
}

function reroll_star_selection() {
  if (player.machines.battery_array.stored_energy < get_propulsion_reroll_cost()) return;
  player.machines.battery_array.stored_energy -= get_propulsion_reroll_cost();
  player.machines.propulsion.selected_star = null;
  player.machines.propulsion.rerolls += 1;
  let new_stars = choose_k(GENERATOR_ROOM_SOURCES.length, 3 + (player.upgrades.propulsion_more_choices.level >= 1 ? 1 : 0));
  player.locations.propulsion_room.star_selection.splice(0);
  for (let i = 0; i < new_stars.length; i++) {
    player.locations.propulsion_room.star_selection.splice(player.locations.propulsion_room.star_selection.length, 1, new_stars[i]);
  }
}