<template>
  <div class="container-sm basket">
    <h1>Корзина</h1>
    <div class="card basket__table">
      <p v-if="!BASKET.length">Корзина пустая...</p>
      <div v-else>
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th>№</th>
              <th>Название товара</th>
              <th>Модель</th>
              <th>Сумма</th>
              <th>Количество</th>
              <th>#</th>
            </tr>
            </thead>
            <basket-item
                v-for="(item, idx) in BASKET"
                :key="item.id"
                :basket_item="item"
                :index="idx"
                @removeProducts="removeProducts(idx)"
                @incrementItem="incrementItem(idx)"
                @decrementItem="decrementItem(idx)"
                :basketTotalConst="basketTotalConst"
            >
            </basket-item>
            <th>Всего:</th>
            <th></th>
            <th></th>
            <th>{{ basketTotalConst }} грн.</th>
            <th></th>
            <th></th>
          </table>


        </div>
      </div>
    </div>
  </div>
</template>
<script>


import {mapActions, mapGetters} from "vuex";
import BasketItem from "./BasketItem";

export default {
  name: "Basket",
  computed: {
    ...mapGetters(['BASKET']),
    basketTotalConst() {
      let result = [];
      if (this.BASKET.length) {
        for (let item of this.BASKET) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }

  },

  methods: {
    ...mapActions(['DELETE_FROM_BASKET', 'INCREMENT_BASKET_ITEM', 'DECREMENT_BASKET_ITEM']),
    removeProducts(idx) {
      this.DELETE_FROM_BASKET(idx)
    },
    decrementItem(idx) {
      this.DECREMENT_BASKET_ITEM(idx)
    },
    incrementItem(idx) {
      this.INCREMENT_BASKET_ITEM(idx)
    }
  },
  components: {BasketItem}
}
</script>

<style scoped>
.basket {
  text-align: center;
  max-width: 1200px;
  margin: 100px auto;
}
.basket h1{
  margin: 50px auto;
  text-align: center;
  color: white;
}
.basket__table {
  border: 5px solid #3eaf7c;
}

.table, th{
  border: 1px solid black;
}

.table thead {
  background: #42b983;
  color: white;
}

.table-responsive {
  overflow-x: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}



</style>