import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CardList from '../CardList';
import { photoData } from './Fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('CardList', () => {
	it('should render', () => {
		const component = shallow(<CardList photos={photoData}/>);
		expect(component).toMatchSnapshot();
	});
});

