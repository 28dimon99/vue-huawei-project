<template>

     <tbody class="basket_item">
     <tr>
       <td>{{index + 1}}</td>
       <td>{{basket_item.name}}</td>

       <td>{{basket_item.model}}</td>

       <td>{{basket_item.price}} грн.</td>
       <td>
         <span @click="decrementItem">-</span>
         {{basket_item.quantity}}
         <span @click="incrementItem">+</span>
       </td>

       <td><button class="btn danger" @click="removeProducts">Удалить</button></td>

     </tr>
     <div>{{basket_item.basketTotalConst}}</div>
     </tbody>

</template>

<script>


export default {
  name: "BasketItem",
  emits:['removeProducts'],
  props: {
    basket_item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed:{

  },
  methods:{
    removeProducts(){
      this.$emit('removeProducts')
    },
    decrementItem(){
      this.$emit('decrementItem')
    },
    incrementItem(){
      this.$emit('incrementItem')
    },


  },

};
</script>

<style scoped>
.basket_item td{
  cursor: pointer;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}



</style>
