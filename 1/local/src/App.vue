<template>
    <div id="app" >
      <CameraPage></CameraPage>
        <router-view /> 
    </div>
</template>

<script>
import CameraPage from './views/CameraPage.vue'
export default {
  name: 'app',
  components: {
    CameraPage
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
