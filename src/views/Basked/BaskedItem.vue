<template>

     <tbody class="basked_item">
     <tr>
       <td>{{index + 1}}</td>
       <td>{{basked_item.name}}</td>

       <td>{{basked_item.model}}</td>

       <td>{{basked_item.price}} грн.</td>
       <td>
         <span @click="decrementItem">-</span>
         {{basked_item.quantity}}
         <span @click="incrementItem">+</span>
       </td>

       <td><button class="btn danger" @click="removeProducts">Удалить</button></td>

     </tr>
     <div>{{basked_item.baskedTotalConst}}</div>
     </tbody>







</template>

<script>


export default {
  name: "BaskedItem",
  emits:['removeProducts'],
  props: {
    basked_item: {
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
.basked_item td{
  cursor: pointer;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}



</style>
