import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router'

const routes = []

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
