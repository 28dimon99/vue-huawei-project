<template>
  <div class="navbar" >
    <div class="navbar_logo">
      <router-link class="navbar-brand" to="/product">
        <img src="../assets/logo.svg" alt="" width="200" height="40">
      </router-link>
    </div>
    <div class="navbar_burger">
        <img src="../assets/burger.png" alt="" class="nav_menu" v-if="!show" @click="show = !show" :key="menu"/>
        <img src="../assets/burger.png" class="close" v-else @click="show = !show" :key="close" alt=""/>

      <transition name="fade" class="navbar_link">
        <ul v-if="show">
          <router-link
              active-class="active"
              tag="li"
              :exact="link.exact"
              :to="link.url"
              v-for="link in links"
              :key="link.url"
          >
            {{ link.title }}
          </router-link>
        </ul>
      </transition>

    </div>
    <ul class="container-sm navbar-menu">
      <li>
        <router-link to="/company">О компании</router-link>
      </li>
      <li>
        <router-link to="/delivery">Доставка и Оплата</router-link>
      </li>
      <li>
        <router-link to="/contacts">Контакты</router-link>
      </li>
      <li>
        <router-link to="/history">История контактов</router-link>
      </li>
      <li>
        <router-link to="/product">Товары</router-link>
      </li>

      <li>
        <router-link to="/basked">Корзина</router-link>
      </li>
      <li>
        <router-link to="/" @click.prevent="logout">Выход</router-link>
      </li>

    </ul>
  </div>
</template>

<script>


export default {
  name: "TheNavbar",
  data() {
    return {
      links: [
        {title: 'О компании', url: '/company', exact: true},
        {title: 'Доставка и Оплата', url: '/delivery'},
        {title: 'Контакты', url: '/contacts'},
        {title: 'История контактов', url: '/history'},
        {title: 'Товары', url: '/product'},
        {title: 'Корзина', url: '/basked'},
        {title: 'Выход', url: '/login'}
      ],
      show: false,

    }
  },
  methods:{
    async logout(){
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar_burger {
  position: absolute;
  top: 25px;
  left: 50px;
  display: none;
}
.navbar-menu{
  margin-right: 50px;
  position: center;

}
.navbar_logo {
  display: grid;
  margin-left: 50px;
}
/*************************Media**********************/
@media only screen and (max-width : 650px) {
  .navbar_burger {
    position: absolute;
    top: 25px;
    left: 20px;
    display: block;
  }
  .navbar-menu{
    display: none;
  }

  .navbar_burger a {
    text-decoration: none;
    color: white;
  }

  .navbar_burger a:hover {
    color: #3eaf7c;

  }

  .nav_menu {
    display: grid;
    position: absolute;
    top: -12px;
    left: 0;
    width: 30px;
    height: 30px;
  }

  .navbar_link {
    display: grid;
    position: relative;
    top: 20px;
    grid-template-columns: 1fr;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    text-decoration: none;
    background: #2c3e50;
    z-index: 999999999999;
    text-align: center;
  }
}

</style>