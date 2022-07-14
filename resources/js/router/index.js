import { createWebHistory, createRouter } from "vue-router";

/*Auth components */
import Login from '../pages/login.vue';
import Register from '../pages/register.vue';
import Home from '../pages/home.vue';
/*Auth components */

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
