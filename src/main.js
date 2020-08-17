import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

import {firebase} from './firebase';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})

