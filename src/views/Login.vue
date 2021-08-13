<template>
  <div class="container login">

    <form action="" class="card text-center" @submit.prevent="onSubmit">
      <h1>Войти в систему</h1>

      <div class="items__login">
        <label for="email">Email</label>
        <input type="text" id="email"
               v-model="email"
               @input="$v.email.$touch"
               :class="{error: $v.email.$error, valid: $v.email.$dirty && !$v.email.$invalid}">
        <small v-if="($v.email.$dirty && !$v.email.required)">Поле email не должно быть пустым</small>
        <small v-else-if="($v.email.$dirty && !$v.email.email)">Введите корректный email</small>
      </div>

     <div class="items__login">
       <label for="password">Пароль</label>
       <input type="password" id="password"
              v-model="password"
              @input="$v.password.$touch"
              :class="{error: $v.password.$error, valid: $v.password.$dirty && !$v.password.$invalid}">
       <small v-if="($v.password.$dirty && !$v.password.required)">Введите пароль</small>
       <small v-else-if="($v.password.$dirty && !$v.password.minLength)">
         Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
       </small>
     </div>



  <button class="btn primary" :disabled="$v.$error" @click="$v.$touch()">
    Войти
  </button>


      <p>Нет аккаунта?</p><h5><router-link to="/register">ЗАРЕГЕСТРИРОВАТСЯ</router-link></h5>
    </form>

    <br/>

  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'



export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '',
    }

  },
  validations: {

      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },


  },
  methods: {
   async onSubmit() {
      if (this.$v.invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
          email: this.email,
          password: this.password,
          repeatedPassword: this.repeatedPassword
      }
      try{
        await this.$store.dispatch('login',formData)
        console.log(formData)
        this.$router.push('/product')
      }catch (e){
        console.log(e)
      }

    }
  },
  mounted() {

  }
}

</script>

<style scoped>
.login {
  display: grid;
  max-width: 700px;
  margin: 50px auto;
}
.card{
  border: 5px solid #42b983;
}
.items__login{
  display: grid;
}
input {
  border: 1px solid silver;
  border-radius: 10px;
  background: white;
  min-height: 35px;
}
label{
  padding: 10px 0 10px 0;
}
button{
  margin: 10px 0 10px 0;
  width: 200px;
  height: 30px;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}

.valid {
  border-color: #5A5;
  background: #EFE;
}

.valid:focus {
  outline-color: #8E8;
}
</style>