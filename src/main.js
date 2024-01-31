import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseHeadingFive from './components/base/BaseHeadingFive.vue';
import BaseTag from './components/base/BaseTag.vue';

const app = createApp(App);
app.component('BaseHeadingFive', BaseHeadingFive);
app.component('BaseTag', BaseTag);
app.mount('#app')
