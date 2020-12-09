import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

Vue.use(VueAxios, axios);

const ApiService = {
    init() {},
    async get(resource, headers) {
        const data = await Vue.axios.get(resource, {
            headers: headers,
        });

        return data;
    },
    async post(resource, data, headers) {
        const response = await Vue.axios
            .post(resource, data, {
                headers: headers,
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                return err.response;
            });
        return response;
    },
    async delete(resource, data, headers) {
        const response = await Vue.axios
            .delete(resource, { data, headers })
            .then(data => {
                return data;
            })
            .catch(err => {
                return err.response;
            });
        return response;
    },
};

export default ApiService;
