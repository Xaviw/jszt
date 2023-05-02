import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'normalize.css'
import './assets/iconfont'
import App from './App.vue'
import i18n from './locales'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: import('./views/index.vue') },
    { path: '/product', component: import('./views/product.vue') },
    { path: '/news', component: import('./views/news.vue') },
    { path: '/about-us', component: import('./views/aboutUs.vue') },
    { path: '/contact-us', component: import('./views/contactUs.vue') },
  ],
})

createApp(App).use(router).use(i18n).mount('#app')
