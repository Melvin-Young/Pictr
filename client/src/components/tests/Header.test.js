import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter()});

describe('Header', () => {
    it('should render', () => {
        const component = shallow(<Header handleSearch={jest.fn()} handleTimer={jest.fn()}/>)
        expect(component).toMatchSnapshot();
    });
});
