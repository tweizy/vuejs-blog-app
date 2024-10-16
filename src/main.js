import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
// src/main.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

createApp(App).mount('#app');

createApp(App).use(router).mount('#app');
