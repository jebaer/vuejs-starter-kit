import * as mut from './mutations';

// Here define some states
const state = {
    name: 'world',
};

// Here define some getters
const getters = {
    getName: state => state.name,
    getCapitalizedName: state => {
        const [firstLetter, ...restOfName] = state.name;
        return firstLetter.toUpperCase() + restOfName.join('').toLowerCase();
    },
};

// Here define some action function
const actions = {
    setName({ commit }, payload) {
        commit(mut.SET_NAME, payload);
    },
};

// Here define some mutations
const mutations = {
    [mut.SET_NAME](state, { name }) {
        state.name = name;
    },
};

const appModule = {
    state,
    actions,
    mutations,
    getters,
};

export default appModule;
