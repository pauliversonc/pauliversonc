import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseHeadingFive from './components/base/BaseHeadingFive.vue';


const app = createApp(App);
app.component('BaseHeadingFive', BaseHeadingFive);
app.mount('#app')
