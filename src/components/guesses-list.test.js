import React from 'react';
import {shallow} from 'enzyme';
import GuessesList from './guesses-list';

describe('<GuessesList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessesList guesses={[]} />);
    });

    it('Renders the text', () => {
        const guesses = [{'value':35, 'temp':"Hot"},
        				{'value':40, 'temp':"Cold"}];

        const wrapper = shallow(<GuessesList guesses={guesses} />);
        const guessesText = "35 40 ";
        expect(wrapper.text()).toEqual(guessesText);
    });
});