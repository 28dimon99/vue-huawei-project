<template>
    <div class="app_main_layout">
     <the-navbar></the-navbar>

      <router-view/>
    </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";

export default {
  name: 'MainLayout',


  components: {
    TheNavbar,
  }
}
</script>
