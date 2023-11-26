import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 이전에 마운트된 앱을 참조하는 변수
let app;

if (!('ResizeObserver' in window)) {
  import('resize-observer-polyfill');
}

// 이미 존재하는 앱이 있는지 확인하고, 있다면 언마운트
if (app) {
  app.unmount();
}

// Vue 앱 생성 및 마운트
app = createApp(App);
app.use(router);
app.mount('#app');
