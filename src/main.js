import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseHeadingFive from './components/base/BaseHeadingFive.vue';
import BaseTag from './components/base/BaseTag.vue';
import BaseIconLink from './components/base/BaseIconLink.vue';
import BaseLink from './components/base/BaseLink.vue';

const app = createApp(App);
app.component('BaseHeadingFive', BaseHeadingFive);
app.component('BaseTag', BaseTag);
app.component('BaseIconLink', BaseIconLink);
app.component('BaseLink', BaseLink);
app.mount('#app')
