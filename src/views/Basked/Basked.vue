<template>
  <div class="container-sm basked">
    <div class="card basked__table">
      <p v-if="!BASKED.length">Корзина пустая...</p>
      <div v-else>
        <h1>Корзина</h1>
        <hr>
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
            <basked-item
                v-for="(item, idx) in BASKED"
                :key="item.id"
                :basked_item="item"
                :index="idx"
                @removeProducts="removeProducts(idx)"
                @incrementItem="incrementItem(idx)"
                @decrementItem="decrementItem(idx)"
                :baskedTotalConst="baskedTotalConst"
            >
            </basked-item>
            <th>Всего:</th>
            <th></th>
            <th></th>
            <th>{{ baskedTotalConst }} грн.</th>
            <th></th>


          </table>
          <div class="basked__order">
            <button class="btn primary" @click="$router.push('/order')">Оформить заказ</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

import BaskedItem from "./BaskedItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(['BASKED']),
    baskedTotalConst() {
      let result = [];
      if (this.BASKED.length) {
        for (let item of this.BASKED) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => {
          return sum + el
        })
        console.log('Всего', result)
        return result
      } else {
        return 0
      }
    }

  },

  methods: {
    ...mapActions(['DELETE_FROM_BASKED', 'INCREMENT_BASKED_ITEM', 'DECREMENT_BASKED_ITEM']),
    removeProducts(idx) {
      this.DELETE_FROM_BASKED(idx)
    },
    decrementItem(idx) {
      this.DECREMENT_BASKED_ITEM(idx)
    },
    incrementItem(idx) {
      this.INCREMENT_BASKED_ITEM(idx)
    }
  },
  components: {BaskedItem}
}
</script>

<style scoped>
.basked {
  text-align: center;
  max-width: 1200px;
  margin: 100px auto;
}

.basked__table {
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

.basked__order {
  margin: 10px auto;
}

</style>