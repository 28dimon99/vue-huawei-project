<template>
  <div class="container login">

    <form action="" class="card text-center" @submit.prevent="onSubmit">
      <h1>Регистрация</h1>

      <label for="email">Email</label>
      <input type="text" id="email" placeholder="email"
             v-model="email"
             @input="$v.email.$touch"
             :class="{error: $v.email.$error, valid: $v.email.$dirty && !$v.email.$invalid}">
      <small v-if="($v.email.$dirty && !$v.email.required)">Поле email не должно быть пустым</small>
      <small v-else-if="($v.email.$dirty && !$v.email.email)">Введите корректный email</small>

      <label for="password">Пароль</label>
      <input type="password" id="password" placeholder="password"
             v-model="password"
             @input="$v.password.$touch"
             :class="{error: $v.password.$error, valid: $v.password.$dirty && !$v.password.$invalid}">
      <small v-if="($v.password.$dirty && !$v.password.required)">Введите пароль</small>
      <small v-else-if="($v.password.$dirty && !$v.password.minLength)">
        Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
      </small>

      <label for="repeat">Повторите пароль</label>
      <input type="password" id="repeat" placeholder="repeat password"
             v-model="repeatedPassword"
             @input="$v.repeatedPassword.$touch"
             :class="{error: $v.repeatedPassword.$error, valid: $v.repeatedPassword.$dirty && !$v.repeatedPassword.$invalid}"
      >
      <small v-if="($v.password.$dirty && !$v.password.required)">Введите пароль</small>
      <small v-else-if="($v.password.$dirty && !$v.password.minLength)">
        Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
      </small>

      <label for="name">Имя</label>
      <input type="text" id="name" placeholder="name"
             v-model="name"
             @input="$v.name.$touch"
             :class="{error: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}">
      <small v-if="($v.password.$dirty && !$v.password.required)">Введите имя</small>
      <small v-else-if="($v.name.$dirty && !$v.name.minLength)">
        Имя должено состоять из {{$v.name.$params.minLength.min}} символов. Сейчас оно {{name.length}}
      </small>

        <button :disabled="$v.$error" @click="$v.$touch()">
        Зарегестрироватся
        </button>


    </form>

    <br/>

  </div>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  name: "LoginTest",
  data() {
    return {

      email: '',
      password: '',
      repeatedPassword: '',
      name: ''

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
    repeatedPassword: {
      required,
      sameAs: sameAs('password')
    },
    name:{
      required,
      minLength: minLength(3)
    }

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
        repeatedPassword: this.repeatedPassword,
        name: this.name
      }
      try{
        this.$router.push('/')
        await this.$store.dispatch('register', formData)
      }catch (e){
        console.log(e)
      }
    }
  }
}

</script>

<style scoped>
.login {
  display: grid;
  max-width: 50%;
  margin: 100px auto;
}

input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
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