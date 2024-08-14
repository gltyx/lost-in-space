Vue.component('inventory-section',{
  template:`
    <div class='inventory-section'>
      <p class='section-title'>{{ localize('inventory') }}</p>
      <div style="width:100%">
        <div>
          <p class="personal-battery">{{ localize('personal_battery') }}: {{ scientificFormat(player.resources['personal_battery'], ' ') }}Wh {{ localize('remaining') }}</p>
          <div class="personal-battery-bar">
            <div class="filled" :style="'width: ' + (100 * player.resources['personal_battery'] / unwrap(GAME_RESOURCES['personal_battery'].limit)) + '%'"></div>
          </div>
        </div>
        <div class="inventory-item" v-for="(item, key) in GAME_RESOURCES" v-if="unwrap(item['show_in_inventory'], true)&&(unwrap(item['is_Decimal'], false)?!player.resources[key].eq(0):player.resources[key]!=0)">
          <p class="inventory-item-name">
          {{localize(key)}}     
          </p>
          <p class="inventory-item-count">
             {{unwrap(item['is_Decimal'], false)?formatWhole(player.resources[key]):player.resources[key]}}
          </p>
          <button :class="'inventory-item-use ' + (!can_use_item(key)?'disabled':'')" v-if="unwrap(item['usable'], false)" @click="use_item(key)">{{ localize('use') }}</button>
          <p class="inventory-item-desc" v-if="localize(key + '-desc', null) !== null">{{ localize(key + '-desc') }}</p>
        </div>
      </div>
    </div>`
});


/*
Implement inventory display (item name, item amount, usage button)
  - Do not display usage button if the item is not usable (V)
  - Do not display resources that have show_in_inventory set to false or are present in 0 amount (V)

*/