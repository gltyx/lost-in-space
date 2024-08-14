Vue.component('upgrade',{
  props: ['name'],
  template:`
    <div class="upgrade">
      <div class="upgrade-locked" v-show="!unwrap(UPGRADES[name].unlock_function, true)">
        <img :src="img('lock')">
        <p class="unlock-tip" v-if="localize(name + '-unlock-tip', null) !== null">{{ localize(name + '-unlock-tip') }}</p>
      </div>
      <div :class="'upgrade-unlocked ' +  ((player.upgrades[name].limit !== null && player.upgrades[name].level >= player.upgrades[name].limit)?'max-level':'')" v-show="unwrap(UPGRADES[name].unlock_function, true)">
        <div class="upgrade-header">
          <p class="upgrade-name">{{ localize(name + '-name') }}</p>
          <p class="upgrade-level" v-show="player.upgrades[name].limit !== 1">{{ player.upgrades[name].level }}</p>
        </div>
        <p class="upgrade-desc">{{ localize(name + '-desc') }}</p>
        <p class="upgrade-effect" v-if="UPGRADES[name].effect!==undefined">{{ localizeFormat(name + '-effect', {effect: player.upgrades[name].effect}) }}{{((player.upgrades[name].limit !== null && player.upgrades[name].level >= player.upgrades[name].limit)?'':(' 🠒 ' + localizeFormat(name + '-effect',{effect: player.upgrades[name].next_level_effect})))}}</p>
        <p class="upgrade-effect binary" v-if="UPGRADES[name].effect===undefined">{{player.upgrades[name].level>=1?localize('upgrade-bought'):localize('upgrade-not-bought')}}</p>
        <div class="upgrade-buy" v-show="!(player.upgrades[name].limit !== null && player.upgrades[name].level >= player.upgrades[name].limit)">
        <div class="upgrade-costs" :style="player.upgrades[name].level>=1&&UPGRADES[name].effect===undefined?'background-color:#165D33':''"> 
            <p :class="'upgrade-cost ' + (has_amount_of_resource(key, value)?'':'lacking-resource')" v-for="(value, key) in player.upgrades[name].cost" v-show="((value instanceof Decimal) ? value.gt(0) : value>0)">
              {{ formatWhole(value) }}x {{ localize(key) }}
            </p>
          </div>
          <button :class="'upgrade-buy-button ' + (!player.upgrades[name].can_buy()?'disabled':'')" @click="player.upgrades[name].buy()">{{ localize('buy') }}</button>
        </div>
      </div>
    </div>`
});
//TODO: make detection of bought upgrade better
Vue.component('upgrade-list',{
  props: ['group', 'rows'],
  template:`
    <div :style="'grid-template-columns: repeat(' + rows + ', 1fr)'" class="upgrade-group">
      <upgrade v-for="(value, key) in UPGRADES" v-if="value.group == group" :name="key">
      </upgrade>
    </div>`
});
