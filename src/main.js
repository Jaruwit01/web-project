
import App from './App.vue'
import Vue from 'vue'
import Camera from './Camera.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h=> h(Camera)
}).$mount('#camera')
