import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

// global component registration
app.component('base-badge', BaseBadge);

app.mount('#app');
