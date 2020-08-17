import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{
      auth:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  let usuario=firebase.auth().currentUser;
  let autorizacion=to.matched.some(record=> record.meta.auth);
  if(autorizacion && !usuario){
    next('/')
  }else if(!autorizacion && usuario){
    next('/admin')
  }else {
    next()
  }
})
export default router
