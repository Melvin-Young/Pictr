import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Scroll from '../Scroll';

Enzyme.configure({ adapter: new Adapter()});

describe('Scroll Container', () => {
    it('should render', () => {
        const component = shallow(<Scroll />)
        expect(component).toMatchSnapshot();
    });
});
