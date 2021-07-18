<template>
  <div>
  <div class="container-sm delivery__pay">
    <h1>Доставка и оплата</h1>

    <h2>Бесплатная доставка заказов по Украине от 1000 грн.</h2>

    <h2>Способы доставки</h2>


    <h3>Транспортная компания «Нова пошта»</h3>

    <p>Отправка товаров в отделение «Нова пошта» по всей Украине, кроме временно оккупированных территорий (Донецкая
      область, Луганская область, АРК Крым).
      После того, как менеджер подтвердит Ваш заказ и отправит его, Вы получите сообщение на электронную почту с номером
      экспресс накладной. По Вашему номеру Вы сможете отследить заказ и узнать, когда он будет ждать Вас в отделении на
      официальном сайте компании «Нова пошта», либо с помощью приложения «Нова пошта».
      Не забывайте проверять целостность посылки и ее соответствие в отделении, прежде чем оплачивать.
      Международная доставка</p>
    <p> Отправка товаров по всему миру осуществляется службами «Нова пошта» и «Укрпочта».
      Стоимость, сроки и службу доставки Вы сможете обсудить с менеджером интернет магазина в индивидуальном порядке.
      Другие варианты доставки</p>


    <p>Доставка заказа курьером Новой Почты по Вашему адресу.</p>
  </div>
  <div class="card ways__pay">
    <h2>Способы оплаты</h2>
  </div>
  <div class="faqs">
    <delivery-items
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
    />
  </div>
  </div>

</template>

<script>
import DeliveryItems from "./DeliveryItems";

export default {
  name: "DeliveryTest",
  components: {DeliveryItems},

  data() {
    return {
      faqs: [
        {
          question: "Как оплатить с помощью наличных?",
          answer: " Оплата наличными при получении товара (доставка по Вашему адресу).\n" +
              "Этот вариант возможен исключительно при доставке по территории Украины.",
          open: false
        },
        {
          question: "Как оплатить с помощью Visa и MasterCard?",
          answer: "Оплата заказа онлайн с помощью банковской карты Visa и MasterCard через систему LiqPay.\n" +
              "Обратите внимание, при этом способе оплаты доставка товара Вам смогут осуществить исключительно после\n" +
              "подтверждения платежа.",
          open: false
        },
        {
          question: " Как оплатить наложенным платежом ТК «Нова пошта» ?",
          answer: " Оплатить заказ наложенным платежом Вы можете после осмотра посылки на его соответствие заказу в отделении «Нова\n" +
              "пошта».\n" +
              "При оплате наложенным платежом взымается комиссия \"Новой Почты\" 2% от суммы заказа, плюс 20 грн за перевод\n" +
              "денежных средств.\n" +
              "Если же заказ Вам не подошел по каким-либо причинам, Вы можете отказаться от получения посылки и не оплачивать\n" +
              "ее.",
          open: false
        },
        {
          question: "Какие другие варианты оплаты ?",
          answer: "Вы можете оплатить заказ через терминал или кассу \"ПриватБанк\", приложение Приват24, либо другие доступные для\n" +
              "Вас терминалы.\n" +
              "После подтверждения заказа менеджер предоставит Вам необходимые реквизиты для оплаты.",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index){
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    }
  }
}
</script>

<style>
.delivery__pay{
  max-width: 1200px;
  background: url('../../assets/bg-history.jpg');
  padding: 15px;
  margin: 100px auto;
  border-radius: 10px;
  border: 5px solid #3eaf7c;
}
.delivery__pay h1,h2,h3{
  text-align: center;
}
.ways__pay{
  max-width: 768px;
  margin: 15px auto;
  border: 5px solid #3eaf7c;
  background: url('../../assets/bg-history.jpg');
}
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background: url('../../assets/bg-history.jpg');;
  border: 5px solid #3eaf7c;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url('../../assets/arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}

.faq.open .question {
  margin-bottom: 15px;
}

.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}

.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}

.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
