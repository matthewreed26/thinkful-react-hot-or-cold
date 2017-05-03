import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Guess from './guess';

describe('<Guess />', () => {
    it('Renders without crashing', () => {
        shallow(<Guess />);
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
        let callback = jest.fn();
        let value = 30;
        let wrapper = mount(<Guess onSubmit={callback} 
			inputGuessVal={value}/>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });
});