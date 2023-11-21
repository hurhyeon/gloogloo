import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if (!('ResizeObserver' in window)) {
    import('resize-observer-polyfill');
  }

createApp(App).use(router).mount('#app')

