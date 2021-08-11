<template>
  <div class="products_main">

    <div class="container-fluid products__header">

    </div>

    <div class="container-sm products__find">
      <input type="search" v-model="search" placeholder="Поиск товара..." id="find">
    </div>


    <div class="container-sm products__body">


      <products-item
          v-for="product in searchValueProducts"
          :key="product.id"
          :product_item="product"
          @addToBasket="addToBasket"
      >

      </products-item>
      <product-alert
          v-if="productAlert"
          @closeAlert="productAlert=false"
      />

    </div>
  </div>

</template>

<script>

import {mapActions, mapGetters} from "vuex";
import ProductsItem from "./ProductsItem";



import ProductAlert from "../../ui/ProductAlert";


export default {
  name: "Products",
  data() {
    return {
      modal: false,
      search: '',
      productAlert: false,
      clickAlert: 0,
    }
  },

  computed: {
    ...mapGetters(['PRODUCTS']),

    searchValueProducts() {
      return [...this.PRODUCTS].filter(elem => {
        return elem.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
      })
    },


  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_BASKET']),
    addToBasket(data) {

      this.ADD_TO_BASKET(data)
      return this.productAlert = true

    },
    clickAlertTotal(){
      this.clickAlert++
    }



  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },

  components: {
    ProductsItem, ProductAlert
  },

}


</script>

<style scoped lang="scss">
.products_main {
  display: grid;
  margin: 0 auto;
}

.products__header {
  display: grid;
  margin: 100px auto;
  color: white;
  border-radius: 10px;
}

.products__body {
  display: grid;
  width: 1300px;
  background: white;
  margin: 50px auto;
  grid-template-columns: repeat(3, 1fr);
  border: 5px solid #3eaf7c;
  border-radius: 10px;
}

.products__find input {
  display: grid;
  margin: 0 auto;
  border-radius: 10px;
  width: 800px;
  height: 40px;
  border: 1px solid white;
}

.products__find input:hover {
  border: 2px solid white;
}

@media (max-width: 1300px) {
  .products__body {
    display: grid;
    width: 900px;
    grid-template-columns: repeat(2, 1fr);

  }

  .products__find input {
    display: grid;
    margin: 0 auto;
    width: 500px;
    height: 40px;

  }
}
@media (max-width: 700px) {
  .products__body {
    display: grid;
    width: 400px;
    grid-template-columns: 1fr;

  }

  .products__find input {
    display: grid;
    margin: 0 auto;
    width: 200px;
    height: 40px;

  }
}
@media (max-width: 400px) {
  @media (max-width: 500px) {
    .products__body {
      display: grid;
      width: 350px;
      grid-template-columns: 1fr;

    }


  }
}

</style>
