<template>
  <div class="app_auth_layout">

    <router-view/>

  </div>

</template>

<script>


import messages from "../utils/messages";

export default {
  name: "AuthLayout",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch:{
    error(fbError){
      //console.log(fbError)
      this.$error(messages[fbError.code] || 'Что то пошло не так')
    }
  }
}
</script>

<style scoped>

</style>