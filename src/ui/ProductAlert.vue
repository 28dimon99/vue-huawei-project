<template>
  <div class="alert primary " @click="$emit('closeAlert')">
    <i class="bi bi-x-lg"></i>
    <h3 class="alert-title">Товар добавлен в корзину!</h3>

  </div>
</template>

<script>
export default {

  emits: ['closeAlert'],
  name: "ProductAlert",


}
</script>

<style scoped>
.alert {
  position: fixed;
  top:0;
  left:0;
  z-index: 999999;
}
.alert i{
  position: absolute;
  top:5px;
  left:365px;
  z-index: 999999;
}
</style>