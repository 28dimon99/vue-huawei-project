<template>

  <div class="products">

    <div class="card products__items" style="width: 20rem; height: 25rem;">

      <div>
        <img :src="product_item.image" class="card-img-top" alt="...">
      </div>
      <div>
        <a class="btn blue" @click="modal=true">Подробнее</a>
      </div>
      <div class="card-body">
        <h4 class="card-text">{{ product_item.name }}</h4>
        <p class="card-text">{{ product_item.model }}</p>
        <p>{{ product_item.price }} грн.</p>
        <a class="btn primary" @click="addToBasket">Добавить в корзину</a>
      </div>
    </div>


  <div v-if="modal">

    <card-modal
        @closeModal="modal=false"
        :card_item="product_item"
    >
    </card-modal>
  </div>
</div>



</template>

<script>



import CardModal from "../../ui/CardModal";





export default {
  name: "ProductsItem",
  emits:['addToBasket', 'productAlert'],
  props: {
    product_item: {
      type: Object,
      default() {
        return {}
      }
    },

  },
  data(){
    return{
      modal: false,

    }
  },

  methods: {
    addToBasket() {
      this.$emit('addToBasket',this.product_item)
    },

  },

  components:{
    CardModal
  },
}
</script>

<style scoped>


.products{
  display: grid;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
}
.products__items{
  display: grid;
  height: 600px;
}
.products__items:hover{
  border: 3px solid #3eaf7c;
}


.products img {
  width: 200px;
  height: 165px;
  padding-bottom: 10px;
}

@media (max-width: 400px) {
  .products__items{
    display: grid;
    max-width: 300px;
    min-height: 500px;
  }
}
</style>