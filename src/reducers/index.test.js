import {hotOrColdReducer} from './index';
import {setWon, setAnswer, setLastTemp,
  setGuesses, setInputGuessVal} from '../actions';

describe('hotOrColdReducer', () => {
          const guess1 = 25;

    it('Should set the initial state when nothing is passed in', () => {
        let state = hotOrColdReducer(undefined, {type: '__UNKNOWN'});
        state = hotOrColdReducer(state, setAnswer(60));
        expect(state).toEqual({
          won:false,
          answer:60,
          lastTemp:null,
          inputGuessVal:'',
          guesses:[]
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotOrColdReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setWon', () => {
        it('Should have won', () => {
            let state;
            state = hotOrColdReducer(state, setAnswer(60));
            state = hotOrColdReducer(state, setWon(true));
            expect(state).toEqual({
              won:true,
              answer:60,
              lastTemp:null,
              inputGuessVal:'',
              guesses:[]
            });
        });
    });

    describe('setGuesses', () => {
        it('Should have guesses', () => {
            let state;
            state = hotOrColdReducer(state, setAnswer(60));
            state = hotOrColdReducer(state,
              setGuesses([{'value':guess1, 'temp':"Cold"}]));
            expect(state).toEqual({
              won:false,
              answer:60,
              lastTemp:null,
              inputGuessVal:'',
              guesses:[{'value':guess1, 'temp':"Cold"}]
            });
        });
    });

    describe('setLastTemp', () => {
        it('Should have lastTemp', () => {
            let state;
            state = hotOrColdReducer(state, setAnswer(60));
            state = hotOrColdReducer(state,
              setLastTemp("Cold"));
            expect(state).toEqual({
              won:false,
              answer:60,
              lastTemp:"Cold",
              inputGuessVal:'',
              guesses:[]
            });
        });
    });

    describe('setInputGuessVal', () => {
        it('Should have inputGuessVal', () => {
            let state;
            state = hotOrColdReducer(state, setAnswer(60));
            state = hotOrColdReducer(state,
              setInputGuessVal(guess1));
            expect(state).toEqual({
              won:false,
              answer:60,
              lastTemp:null,
              inputGuessVal:guess1,
              guesses:[]
            });
        });
    });
});
