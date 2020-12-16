import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    theme: 'toasted-primary',
    position: 'bottom-center',
    duration: 4000,
    iconPack: 'fontawesome',
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
