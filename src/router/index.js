import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Router from 'vue-router';

import Home from './../views/Home.vue';
Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!VueCookies.isKey('token')) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath },
            });
        } else {
            next();
        }
    } else if (
        (to.name == 'login' || to.name == 'signup') &&
        VueCookies.isKey('token')
    ) {
        next({
            path: '/home',
            params: { nextUrl: to.fullPath },
        });
    } else if (VueCookies.isKey('token')) {
        next({
            path: '/home',
            params: { nextUrl: to.fullPath },
        });
    } else {
        next();
    }
});

export default router;
