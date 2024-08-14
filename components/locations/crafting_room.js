Vue.component('crafter_recipe',{
  props: ["name"],
  template:`
    <div class="craftable-object">
      <p class="craftable-object-name">{{ (unwrap(CRAFTER_RECIPES[name].output, 1) != 1 || (player.machines.crafter.bulk && get_bulk_crafting_amount(name) > 1)) ? formatWhole(unwrap(CRAFTER_RECIPES[name].output, 1) * (player.machines.crafter.bulk ? get_bulk_crafting_amount(name) : 1)) + 'x ' : '' }}{{ localize(name) }}</p>
      <p class="craftable-object-desc">{{ localize(name + '-desc') }}.</p>
      <p class="craftable-object-time-cost">{{ formatTime(get_crafting_time_cost(name)) }}</p>
      
      <div class="craftable-object-costs">
        <p :class="'craftable-object-cost ' + (has_amount_of_resource(key, value)?'':'lacking-resource')" v-for="(value, key) in get_crafting_cost(name)">
          {{ formatWhole(value) }}x {{ localize(key) }}
        </p>
      </div>
      <div class="craftable-object-buy">
        <button :class="'craft-object-button ' + (!can_craft_item(name)?'disabled':'')" @click="craft_item(name)">{{ localize('craft') }}</button>
      </div>
    </div>`
});

Vue.component('location-crafting_room',{
  template:`
    <div class='location-contents' v-show="player.current_location == 'crafting_room'">
      <machine-header name="crafter"></machine-header>
      <div class="crafting-job-info">
        <div class="current-print-job">
          <p class="current-print-job-name">{{ localize('currently-crafting') }}{{ (player.machines.crafter.current_job !== null ? (': ' + (unwrap(CRAFTER_RECIPES[player.machines.crafter.current_job].output, 1) * player.machines.crafter.batch == 1 ? '' : (unwrap(CRAFTER_RECIPES[player.machines.crafter.current_job].output, 1) * player.machines.crafter.batch) + 'x ') + localize(player.machines.crafter.current_job)) : (' ' + localize('nothing'))) }}</p>
          <p class="current-print-job-time-left" v-show="player.machines.crafter.current_job !== null">{{(player.machines.crafter.ends_at !== null ? formatTime(player.machines.crafter.job_time - player.machines.crafter.time_passed) : '') + ' ' + localize('remaining')}}</p>
          <div class="current-print-job-progress-bar" v-show="player.machines.crafter.current_job !== null">
            <div class="time-passed" :style="'flex-grow: ' + (player.machines.crafter.time_passed)"></div>
            <div class="time-remaining" :style="'flex-grow: ' + (player.machines.crafter.job_time - player.machines.crafter.time_passed)"></div>
          </div>
        </div>
        <button :class="'bulk-crafting-button bulk-button-'+(player.machines.crafter.bulk?'opened':'closed')" v-show="player.upgrades.bulk_crafting.level >= 1" @click="player.machines.crafter.bulk = !player.machines.crafter.bulk">{{ localize('bulk') }}</button>
      </div>
      <div class='printable-objects'>
        <crafter_recipe v-for="(value, key) in CRAFTER_RECIPES" v-show="unwrap(value.unlock, true)" :name="key">
        </crafter_recipe>
      </div>
      <p class='section-title'>{{ localize('upgrades') }}</p>
      <upgrade-list group="crafting" rows="2"></upgrade-list>
    </div>`
});