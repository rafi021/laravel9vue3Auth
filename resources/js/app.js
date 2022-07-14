import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import store from './store';
import app from './layouts/app.vue';

createApp(app)
    .use(router)
    .use(store)
    .mount('#app');
