import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

Vue.use(VueAxios, axios);

const ApiService = {
    /**
     * Defines a GET HTTP Request
     *
     * @param {string} resource the endpoint to request
     * @param {object} headers the header of the request
     * @returns {object} the returned data
     */
    async get(resource, headers) {
        const data = await Vue.axios.get(resource, {
            headers: headers,
        });

        return data;
    },
    /**
     * Defines a POST HTTP Request
     *
     * @param {string} resource the endpoint to request
     * @param {object} data the body of the request
     * @param {object} headers the header of the request
     * @returns {object} the returned data
     */
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
    /**
     * Defines a DELETE HTTP Request
     *
     * @param {string} resource the endpoint to request
     * @param {object} data the body of the request
     * @param {object} headers the header of the request
     * @returns {object} the returned data
     */
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
