import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import appModule from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        }),
    ],
    modules: {
        appModule,
    },
});

export default store;
