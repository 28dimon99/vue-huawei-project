<template>
  <div class="app_wrapper">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>


import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";

export default {
  name: "App",
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    AuthLayout, MainLayout
  }
}
</script>
<style lang="scss">

</style>
