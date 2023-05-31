import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import usuario from '../views/VistaUsuario.vue'
import cambiarcontra from '../views/CambiarContra.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path: '/login', name:'login', component: login },
  {path: '/usuario', name:'usuario', component: usuario },
  {path: '/cambiarcontra', name:'cambiarcontra', component: cambiarcontra }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
