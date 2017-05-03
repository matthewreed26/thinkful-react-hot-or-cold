import React from 'react';
import {shallow} from 'enzyme';
import GuessTemp from './guess-temp';

describe('<GuessTemp />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessTemp lastTemp="Hot" />);
    });

    it('Renders the text', () => {
        const text = "Hot";
        const wrapper = shallow(<GuessTemp lastTemp={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});