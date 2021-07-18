<template>
  <div class="modal-backdrop" @click="$emit('closeModal')">
    <div class="modal">
      <h3>{{card_item.name}}</h3>
      <p>Модель: {{card_item.model}}</p>
      <p>Цена: {{card_item.price}} грн</p>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['closeModal', 'cardItems'],
  name: "CardModal",
  props: {
    card_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}
</script>

<style scoped>
   .modal{
     display: grid;
     text-align: center;
   }
</style>