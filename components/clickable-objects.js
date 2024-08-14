Vue.component('clickable-object',{
  props: ['object_id', 'object_info'],
  template:`
    <img class='clickable-object' :src="img(object_info.img)" 
    :style="'top: ' + (100 * object_info.y) + 'vh; left: ' + (100 * object_info.x) + 'vw; height: ' + object_info.height + 'px; width: ' + object_info.width + 'px'" 
    v-show="player.current_screen == 'main' && player.current_location == object_info.location && !player.clickable_objects[object_id]"
    @click="click_on_object(object_id)">
    `
});

Vue.component('clickable-objects',{
  template:`
    <div class='clickable-objects'>
       <clickable-object v-for="(object_info, object_id) in CLICKABLE_OBJECTS" :object_id="object_id" :object_info="object_info">
       </clickable-object>
    </div>`
});