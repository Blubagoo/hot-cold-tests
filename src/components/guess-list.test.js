import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('render a list of guesses', () => {
		const guesses = [1,56,32,25];
		const wrapper = shallow(<GuessList guesses={guesses} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(guesses.length);
		guesses.forEach((value,index) => {
			expect(items.at(index).text()).toEqual(value.toString());
		});
	});
});