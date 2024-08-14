Vue.component('machine-header',{
  props: ["name"],
  template:`
    <div class="machine-header">
      <p class="machine-header-name">{{ localize(name) }}</p>
      <p class="machine-header-desc">{{ localize(name + '-desc') }}</p>
    </div>`
});
