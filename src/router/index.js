import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
        },
    ],
});

export default router;
