<template>
  <div class="container-fluid">
    <div class="header">
      <h1>Контакты</h1>
    </div>

    <div class="container-sm contacts">
      <div class="container-sm  contacts_form">
        <h2> Форма обратной связи</h2>
        <form action="" class="form-control" @submit.prevent="submitForm">
          <div>
            <label for="email">Введите ваше имя</label>
            <input type="text" id="name" v-model.trim="name"
                   @input="$v.name.$touch"
                   :class="{error: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}">
            <small v-if="($v.name.$dirty && !$v.name.required)">Введите ваше имя</small>
            <small v-else-if="($v.name.$dirty && !$v.name.minLength)">
              Имя должно быть минимум{{$v.name.$params.minLength.min}} символа. Сейчас оно {{name.length}}
            </small>
          </div>

          <div>
            <label for="email">Введите вашу почту</label>
            <input type="text" id="email" v-model.trim="email"
                   @input="$v.email.$touch"
                   :class="{error: $v.email.$error, valid: $v.email.$dirty && !$v.email.$invalid}">
            <small v-if="($v.email.$dirty && !$v.email.required)">Поле email не должно быть пустым</small>
            <small v-else-if="($v.email.$dirty && !$v.email.email)">Введите корректный email</small>

          </div>
          <div class="form-control">
            <label for="phone">Введите ваш телефон</label>
            <input type="text" id="phone"
                   v-model="phone"
                   v-imask="phoneNumberMask"
                   placeholder="+3(800)000-00-00"
                   @input="$v.phone.$touch"
                   :class="{error: $v.phone.$error, valid: $v.phone.$dirty && !$v.phone.$invalid}">
            <small v-if="($v.phone.$dirty && !$v.phone.required)">Введите номер телефона в формате +380...</small>
            <small v-else-if="($v.phone.$dirty && !$v.phone.minLength)">
              Телефон должен состоять минимум  из {{$v.phone.$params.minLength.min}} цифр. Сейчас он {{phone.length}}
            </small>

          </div>
          <div class="form-control">
            <label for="commit">Комментарий</label>
            <textarea type="text" id="commit" v-model.trim="commit"
                      @input="$v.commit.$touch"
                      :class="{error: $v.commit.$error, valid: $v.commit.$dirty && !$v.commit.$invalid}">
            </textarea>
            <small v-if="($v.commit.$dirty && !$v.commit.required)">Оставьте ваш коментарий</small>
            <small v-else-if="($v.commit.$dirty && !$v.commit.minLength)">
              Коментарий должен состоять минимум  из {{$v.commit.$params.minLength.min}} символов. Сейчас он {{commit.length}}
            </small>


          </div>
          <button class="btn primary" type="submit"
                  :disabled="$v.$error" @click="$v.$touch()"
          >
            Отправить
          </button>
        </form>


      </div>
      <div class="contacts_phone">
        <h2>Информация для связи</h2>
        <div class="contacts_info">
          <div>
            <h3>Почта</h3>
            <p> vonavin.com@gmail.com</p>
          </div>
          <div>
            <h3>Телефон</h3>
            <p> +38 095 582 58 58</p>
            <p> +38 093 582 58 58 (опт) </p>
            <p> +38 097 582 58 58</p>
          </div>
          <div>
            <h3>Социальные сети</h3>
            <div class="contacts_social">
              <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
              <a href="https://xn--80affa3aj0al.xn--80asehdb/#/login"><i class="bi bi-telegram"></i></a>
              <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110"><i class="bi bi-facebook"></i></a>
              <a href="https://twitter.com/?lang=uk"><i class="bi bi-twitter"></i></a>
              <a href="https://www.linkedin.com/"><i class="bi bi-linkedin"></i></a>
              <a href="https://www.whatsapp.com/?lang=uk"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>

import {minLength, required, email} from "vuelidate/lib/validators";
import {IMaskDirective} from 'vue-imask'


export default {
  name: "Contacts",
  components: {

  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      commit: '',
      modal: false,
      phoneNumberMask:{
        mask: '+{3}(800)000-00-00',
        lazy: true
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },

    email: {
      required,
      email
    },
    phone: {
      required,
      minLength: minLength(16)
    },
    commit: {
      required,
      minLength: minLength(10)
    },


  },
  directives: {
    imask: IMaskDirective
  },

  methods: {
    submitForm() {
      if (this.$v.invalid) {
        this.$v.$touch()
        return
      }

      const contact = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        commit: this.commit,
      }
      this.name = ''
      this.email = ''
      this.phone = ''
      this.commit = ''
      console.log(contact)
      try {
        this.$store.dispatch('createContact', contact)
        this.$router.push('/history')
      } catch (e) {
        console.log(e)
      }

    }
  }
}
</script>

<style scoped>
.header {
  display: grid;
  margin: 50px auto;
  text-align: center;
  color: white;

}

.contacts {
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 550px;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  background: url('../../assets/bg-contacts.jpg');
  padding: 10px;
  border: 5px solid #3eaf7c;
  text-align: center;
}

.contacts_phone {
  display: grid;
  height: 500px;
  border-left: 5px solid #3eaf7c;
  padding: 10px;
}

.contacts_info {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.contacts_social{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  color: #3c3c3c;
}


.contacts_form {
  display: grid;
  height: 500px;
  padding: 20px 15px 20px 0;

}

.contacts_form input, textarea {
  border-radius: 10px;
}
input {
  border: 1px solid silver;
  border-radius: 10px;
  background: white;
  min-height: 35px;
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
@media (max-width: 800px) {
  .contacts_info {
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media (max-width: 500px) {
  .contacts {
    display: grid;
    margin: 0 auto;
    max-width: 1000px;
    min-height: 1200px;
    grid-template-columns: 1fr;
  }
  .contacts_phone {
    display: grid;
    height: 500px;
    border-left: none;
    padding: 10px;
  }

}
</style>
