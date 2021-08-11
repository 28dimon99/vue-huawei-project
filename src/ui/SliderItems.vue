<template>
<div class="slider_items">
  <img :src="require('../assets/slider/' + item_data.img)" alt="">
</div>
</template>

<script>
export default {
  name: "SliderItems",
  props:{
    item_data:{
      type: Object,
      default: () =>{}
    }
  }
}
</script>

<style scoped>


</style>