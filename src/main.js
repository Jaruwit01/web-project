// import cerateApp from 'vue'
import App from './App.vue'
import Vue from 'vue'
// cerateApp(App).mount('#app')
new Vue({
  render: h => h(App)
}).$mount('#app')