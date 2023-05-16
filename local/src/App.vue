<template>
    <div id="app">
      <Menu />
        <router-view /> 
    </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    Menu
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
