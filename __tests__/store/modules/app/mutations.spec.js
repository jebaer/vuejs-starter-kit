import appModule from 'Store/modules/app';
import * as _ from 'Store/modules/app/mutations';

describe('SET_NAME mutation in store APP', () => {
    test('should mutate name state', () => {
        const state = { name: '' };
        const name = 'spectrum';
        appModule.mutations[_.SET_NAME](state, { name });
        expect(state.name).toEqual(name);
    });
});
