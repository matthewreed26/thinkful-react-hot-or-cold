import React from 'react';
import {shallow} from 'enzyme';
import HotOrCold from './hot-or-cold';

describe('<HotOrCold />', () => {
    it('Renders without crashing', () => {
        shallow(<HotOrCold />);
    });

    it('Plays hot or cold', () => {
        const wrapper = shallow(<HotOrCold />);
        const guess1 = 25;
        const guess2 = 40;
        const guess3 = 60;

        wrapper.setState({answer:60})

        wrapper.instance().gameLogic(guess1);
        expect(wrapper.state('won')).toEqual(false);
        expect(wrapper.state('guesses'))
        		.toEqual([{'value':guess1, 'temp':"Cold"}]);
        expect(wrapper.state('lastTemp')).toEqual("Cold");

        wrapper.instance().gameLogic(guess2);
        expect(wrapper.state('won')).toEqual(false);
        expect(wrapper.state('guesses'))
        		.toEqual([{'value':guess1, 'temp':"Cold"},
        			{'value':guess2, 'temp':"Hot"}]);
        expect(wrapper.state('lastTemp')).toEqual("Hot");

        wrapper.instance().gameLogic(guess3);
        expect(wrapper.state('won')).toEqual(true);
    });
});