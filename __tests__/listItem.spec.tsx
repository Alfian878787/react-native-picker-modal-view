import * as React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';

import { ListItemComponent } from '../src/Components/ListItem';


describe('ListItemComponent', () => {
	describe('rendering', () => {
		let wrapper: ShallowWrapper;
		let mounting;
		const data = {
			Id: 1,
			Name: 'John Doe',
			Value: 'John Doe'
		}
		const spyOn = jest.fn(() => data);
		const component = (<ListItemComponent
			list={data}
			onSelectMethod={spyOn}
			defaultSelected={data}
		/>);
		beforeEach(() => {
			wrapper = shallow(component);
			mounting = mount(component);
		});


		test('should render a <TouchableOpacity />', () => {
			expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
		});

		test('should goToUp is pressed', () => {
			spyOn.mockReturnValue(data);
			wrapper.find(TouchableOpacity).first().simulate('press');
			expect(spyOn).toHaveBeenCalled();
		});

		test('should defaultSelected prop object equal to data', () => {
			expect(mounting.props().defaultSelected).toMatchObject(data);
		});

	});
});
