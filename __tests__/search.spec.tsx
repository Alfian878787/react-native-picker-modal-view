import * as React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { View, TouchableOpacity, TextInput } from 'react-native';

import { SearchComponent } from '../src/Components/Search';


describe('SearchComponent', () => {
	describe('rendering', () => {
		let wrapper: ShallowWrapper;
		let mounting;
		const back = jest.fn(() => 'back_pressed');
		const close = jest.fn(() => 'close_pressed');
		const onChange = jest.fn(() => 'onchange_input');
		const component = (
			<SearchComponent
				autoCorrect={true}
				searchText={'search'}
				placeholderTextColor={'#ddd'}
				onClose={close}
				onBackRequest={back}
				forceSelect={false}
				setText={onChange}
			/>);
		beforeEach(() => {
			wrapper = shallow(component);
			mounting = mount(component);
		});


		test('should render a <TouchableOpacity />', () => {
			expect(wrapper.find(View)).toHaveLength(1);
		});

		test('should onBackRequest pressed', () => {
			back.mockReturnThis();
			wrapper.find(TouchableOpacity).first().simulate('press');
			expect(back).toHaveBeenCalled();
		});

		test('should onClose pressed', () => {
			back.mockReturnThis();
			wrapper.find(TouchableOpacity).last().simulate('press');
			expect(back).toHaveBeenCalled();
		});

		test('should forceSelect & autoCorrent type is boolean', () => {
			expect(typeof mounting.props().autoCorrect).toEqual('boolean');
			expect(typeof mounting.props().forceSelect).toEqual('boolean');
		});

		test('should input typing fired changed method', () => {
			onChange.mockReturnValue('onchange_input');
			wrapper.find(TextInput).first().simulate('change');
			expect(onChange).toBe('');
		});

	});
});
