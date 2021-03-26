import validation from 'Mixins/validation';
import { shallowMount } from '@vue/test-utils';

describe('Name validation mixin', () => {
    const wrapper = shallowMount({
        render() {},
        mixins: [validation],
        data() {
            return {
                name: null,
            };
        },
    });
    test('should be invalid when name is to short', () => {
        wrapper.setData({ name: 'x' });
        expect(wrapper.vm.nameValidation()).toBeFalsy();
    });

    test('should be invalid when name contains numeric caracters', () => {
        wrapper.setData({ name: 'r2d2' });
        expect(wrapper.vm.nameValidation()).toBeFalsy();
    });

    test('should be valid when name contains only alpha caracters in uppercase', () => {
        wrapper.setData({ name: 'SpecTruM' });
        expect(wrapper.vm.nameValidation()).toBeTruthy();
    });

    test('should be valid when name contains only alpha caracters in lowercase', () => {
        wrapper.setData({ name: 'spectrum' });
        expect(wrapper.vm.nameValidation()).toBeTruthy();
    });
});
