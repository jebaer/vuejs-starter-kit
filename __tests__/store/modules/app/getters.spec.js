import appModule from 'Store/modules/app';

describe('App getters', () => {
    test('getCapitalizedName should return capitalized name', () => {
        const name = 'spectrum';
        const state = { name };
        expect(appModule.getters.getCapitalizedName(state)).toEqual('Spectrum');
    });
});
