<template>
  <div class="app_auth_layout">
   <app-message/>
    <router-view/>

  </div>

</template>

<script>




import AppMessage from "../ui/AppMessage";

export default {
  name: "AuthLayout",
  components:{
    AppMessage
  }
}
</script>

<style scoped>

</style>