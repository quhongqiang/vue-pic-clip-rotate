import Vue from 'vue'
import App from './App.vue'
import PicClip from './plug-in/index'

Vue.config.productionTip = false

Vue.use(PicClip)

new Vue({
  render: h => h(App),
}).$mount('#app')
