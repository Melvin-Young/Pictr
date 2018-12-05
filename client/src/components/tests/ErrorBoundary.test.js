import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

Enzyme.configure({ adapter: new Adapter()});

describe('Error Boundary', () => {
    it('generates a error message when an error is caught', ()=>{
        const component = shallow(<ErrorBoundary />);
        component.setState({
            hasError: true
        });
        expect(component.text()).toBe("Oooops. That's not good :(");
    });
});