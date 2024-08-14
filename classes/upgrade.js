class Upgrade {
  constructor(name) {  // do not save upgrade data to allow rebalancing mid-save
    this.name = name;
    this.level = 0; // not B_E since there is no bulk buy
  }
  
  get limit() {
    if ("limit" in UPGRADES[this.name]) {
      let limit = UPGRADES[this.name].limit;
      if (typeof limit === "function") {
        limit = limit();
      }
      return limit;
    }
  }
  
  get cost() {
    return UPGRADES[this.name].cost(this.level);
  }
  
  get effect() {
    if ("effect" in UPGRADES[this.name]) {
      return UPGRADES[this.name].effect(this.level);
    }
    else return this.level;
  }
  
  get next_level_effect() {
    return UPGRADES[this.name].effect(this.level + 1);
  }
  
  can_buy() {
    if (!unwrap(UPGRADES[this.name].unlock_function, true)) {
      return false;
    }
    if (this.limit !== null && this.level >= this.limit) {
      return false;
    }
    let cost = this.cost;
    for (let item in cost) {
      if (player.resources[item] instanceof Decimal) {
        if (player.resources[item].lt(cost[item])) return false;
      }
      else {
        if (player.resources[item] < cost[item]) return false;
      }
    }
    return true;
  }
  
  buy() {
    if (!this.can_buy()) {
      return;
    }
    let cost = this.cost;
    for (let item in cost) {
      if (player.resources[item] instanceof Decimal) {
        player.resources[item] = player.resources[item].sub(cost[item]);
      }
      else {
        player.resources[item] -= cost[item];
      }
    }
    this.level += 1;
    if ("onbuy" in UPGRADES[this.name]) {
      UPGRADES[this.name].onbuy(this.level);
    }
  }
  
  reset() {
    if (!("is_meta" in UPGRADES[this.name]) || !UPGRADES[this.name].is_meta) {
      this.level = 0;
    }
  }
}