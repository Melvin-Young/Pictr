import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ImageComponent from '../Header';
import { photoData } from './Fixtures';

Enzyme.configure({ adapter: new Adapter()});

describe('ImageComponent', () => {
    it('should render', () => {
        const component = shallow(<ImageComponent margin={5} photos={photoData}/>)
        expect(component).toMatchSnapshot();
    });
});
