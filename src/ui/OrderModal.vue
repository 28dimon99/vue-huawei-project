<template>
  <div class="modal-backdrop" @click="$emit('closeModal')">
    <div class="modal">
      <h1>Спасибо!!!</h1>
      <h2>Ваш заказ отправлен в обработку</h2>
      <h3>Наш менеджер свяжется с вами в течении 10 минут</h3>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['closeModal'],
  name: "OrderModal",
  props: {
    order_item: {
      type: String,
      default() {
        return ''
      }
    }
  },

}
</script>

<style scoped>

</style>