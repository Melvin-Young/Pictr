import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Card from '../Card';
import { photoData } from './Fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
	it('should render', () => {
		const component = shallow(<Card src={photoData[0].src}/>);
		expect(component).toMatchSnapshot();
	});
});

