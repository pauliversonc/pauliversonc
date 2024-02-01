import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseHeadingFive from './components/base/BaseHeadingFive.vue';
import BaseTag from './components/base/BaseTag.vue';
import BaseIconLink from './components/base/BaseIconLink.vue';

const app = createApp(App);
app.component('BaseHeadingFive', BaseHeadingFive);
app.component('BaseTag', BaseTag);
app.component('BaseIconLink', BaseIconLink);
app.mount('#app')
