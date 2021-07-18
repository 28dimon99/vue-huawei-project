<template>
  <div class="modal-backdrop" @click="$emit('closeModal')">
    <div class="modal">
      <h1>Спасибо!!! Мы с вами свяжемся</h1>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['closeModal'],
  name: "ContactModal",
  props: {
    contact_item: {
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