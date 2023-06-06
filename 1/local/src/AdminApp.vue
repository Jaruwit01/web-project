<template>
    <div id="admin-app" >
      <AdminPage></AdminPage>
        <router-view /> 
    </div>
</template>
<script>
import AdminPage from './views/AdminPage.vue'
export default {
  name: 'admin-app',
  components: {
    AdminPage
  }
}
</script>
<style>
  * {
    font-family: 'Chivo Mono', monospace;
    padding: 0;
    box-sizing: border-box;
}
</style>
