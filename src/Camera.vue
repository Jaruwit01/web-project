<template>
  <div id="camera">
    <Menu />
    <Card />
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
import Card from "./components/Card.vue";
export default {
  name: "Camera-page",
  components: {
    Menu,
    Card,
  },
};
</script>
<style >

</style>