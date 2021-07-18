<template>
  <div class="order">
      <form class=" card order__form" @submit.prevent="addOrder">
        <h1>Введите данные</h1>
        <div class="item__form mb-3">
          <label for="surname">Фамилия</label>
          <input type="text" v-model="surname" id="surname">
        </div>
        <div class="item__form mb-3">
          <label for="name">Имя</label>
          <input type="text" v-model="name" id="name">
        </div>
        <div class="item__form mb-3">
          <label for="phone">Номер телефона</label>
          <input type="phone" v-model="phone" id="phone">
        </div>
        <div>
          <div class="item__form mb-3">
            <div>
              <label for="cart">Номер карты</label>
              <input type="text" v-model="cart" id="cart">
            </div>

          </div>
          <div class="item__form mb-3 term" >
            <div>
              <label for="month">Срок действия</label>
            </div>
            <div>
              <input type="text" id="month" v-model="month" > / <input type="text" id="year" v-model="year">
            </div>
          </div>
          <div class="item__form mb-3">
            <label for="code">CVV</label>
            <div>
              <input type="password" v-model="password" id="code">
            </div>

            <div class="item__form mb-3">
              <button class=" btn primary" type="submit"
                      @click="modal=true"
              >
                Добавить
              </button>
            </div>

          </div>

        </div>
      </form>
    <div v-if="modal">

      <order-modal
          @closeModal="modal=false"
      >
      </order-modal>
    </div>
    </div>


</template>

<script>
import OrderModal from "./OrderModal";

export default {
  name: "OrderProducts",
  components:{
    OrderModal
  },
  data(){
    return{
      surname: '',
      name: '',
      phone: '',
      cart: '',
      month: '',
      year: '',
      password: '',
      modal: false

    }
  },
  methods:{
    addOrder(){
      const dataOrder = {
        surname: this.surname,
        name: this.name,
        phone: this.phone,
        cart: this.cart,
        month: this.month,
        year: this.year,
        password: this.password
       }
      this.surname =''
      this.name =''
      this.phone =''
      this.cart =''
      this.month =''
      this.year =''
      this.password =''
      console.log(dataOrder)
      try{
        //Передаем наш обьект dataOrder в store
        this.$store.dispatch('createOrder', dataOrder)
        setTimeout(() => {
          this.$router.push('/product')
        }, 5000)

      }catch (e){
        console.log(e)
      }

    }
  }
}
</script>

<style scoped>
.order{
  margin: 100px auto;
  max-width: 800px;
  font-weight: bold;
  text-align: center;
}

.order__form{
  display: grid;
  grid-gap:5px;
  border: 5px solid #3eaf7c;
  padding: 10px;
  justify-content: center;
}
.order__form label{
  padding: 10px;
}
.order__form input{
  display: grid;
  width: 300px;
}

button{
  margin: 10px auto;

}
.term input{
  display: grid;
  grid-template-columns: 1fr;
  width: 300px;
}
@media(max-width: 450px){
  .order{
    max-width: 500px;
    margin: 0 auto;

  }

  .order__form input{
    display: grid;
    width: 250px;

  }
}
</style>