import React from 'react';
import {shallow} from 'enzyme';
import {HotOrCold} from './hot-or-cold';
import {setWon, setAnswer, setLastTemp,
  setGuesses, setInputGuessVal} from '../actions';

describe('<HotOrCold />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<HotOrCold dispatch={dispatch} />);
    });

    it('Plays hot or cold', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<HotOrCold dispatch={dispatch} />);
        // Ignore any previous calls to dispatch
        dispatch.mockClear();

        const guess1 = 25;

        wrapper.instance().setAnswer(60);
        expect(dispatch).toHaveBeenCalledWith(setAnswer(60));

        wrapper.instance().gameLogic(guess1);
        expect(dispatch).toHaveBeenCalledWith(
          setGuesses([{'value':guess1, 'temp':"Cold"}]));
        expect(dispatch).toHaveBeenCalledWith(setLastTemp('Cold'));
    });
});
