import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchBox from '../SearchBox';

Enzyme.configure({ adapter: new Adapter()});

describe('SearchBox', () => {
    it('should render', () => {
        const component = shallow(<SearchBox handleSearch={jest.fn()} handleTimer={jest.fn()}/>)
        expect(component).toMatchSnapshot();
    });
});
