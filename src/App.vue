<template>
  <v-app class="container">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
.container {
    background: #3A1C71;
    background: linear-gradient(90deg, rgba(0,29,45,1) 0%, rgba(0,29,45,0.5) 100%);
    background: linear-gradient(90deg, rgba(0,29,45,1) 0%, rgba(0,29,45,0.5) 100%);
 height: 100vh;
}
</style>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
