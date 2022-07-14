import { createWebHistory, createRouter } from "vue-router";

/*Auth components */
import Login from '../pages/login.vue';
import Register from '../pages/register.vue';
/*Auth components */

import Home from '../pages/home.vue';
import Dashboard from '../pages/dashboard.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// middleware
router.beforeEach((to,from) => {
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return { name: 'Login'}
    }
    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
        return { name: 'Dashboard'}
    }
})

export default router;
