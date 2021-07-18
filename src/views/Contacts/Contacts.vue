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
            >
            

          </div>
          <div>
            <label for="email">Введите вашу почту</label>
            <input type="text" id="email" v-model.trim="email"

            >

          </div>
          <div class="form-control">
            <label for="phone">Введите ваш телефон</label>
            <input type="text" id="phone" v-model.trim.number="phone"

            >

          </div>
          <div class="form-control">
            <label for="commit">Комментарий</label>
            <textarea type="text" id="commit" v-model.trim="commit"

            >

            </textarea>


          </div>

          <button class="btn primary" type="submit"

                  @click="modal=true"
          >
            Отправить
          </button>
        </form>
        <div v-if="modal">

          <contact-modal
              @closeModal="modal=false"
          >
          </contact-modal>
        </div>
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
import ContactModal from "../../ui/ContactModal";

export default {
  name: "Contacts",
  components: {
    ContactModal
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      commit: '',
      modal: false
    }
  },

  methods: {
    submitForm() {

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
        //Передаем наш обьект contact в store
        this.$store.dispatch('createContact', contact)
        setTimeout(() => {
          this.$router.push('/history')
        }, 2000)

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
}


.contacts_form {
  display: grid;
  height: 500px;
  padding: 20px 15px 20px 0;

}

.contacts_form input, textarea {
  border-radius: 10px;
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