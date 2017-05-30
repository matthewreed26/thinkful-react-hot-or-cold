import {
    SET_WON,
    setWon,
    SET_ANSWER,
    setAnswer,
    SET_LAST_TEMP,
    setLastTemp,
    SET_GUESSES,
    setGuesses,
    SET_INPUT_GUESS_VAL,
    setInputGuessVal
} from './index';

describe('setWon', () => {
    it('Should return the action', () => {
        const won = true;
        const action = setWon(won);
        expect(action.type).toEqual(SET_WON);
        expect(action.won).toEqual(won);
    });
});

describe('setAnswer', () => {
    it('Should return the action', () => {
        const answer = 60;
        const action = setAnswer(answer);
        expect(action.type).toEqual(SET_ANSWER);
        expect(action.answer).toEqual(answer);
    });
});

describe('setLastTemp', () => {
    it('Should return the action', () => {
        const lastTemp = 'Hot';
        const action = setLastTemp(lastTemp);
        expect(action.type).toEqual(SET_LAST_TEMP);
        expect(action.lastTemp).toEqual(lastTemp);
    });
});

describe('setGuesses', () => {
    it('Should return the action', () => {
        const guesses = [{'value':25, 'temp':"Cold"}];
        const action = setGuesses(guesses);
        expect(action.type).toEqual(SET_GUESSES);
        expect(action.guesses).toEqual(guesses);
    });
});

describe('setInputGuessVal', () => {
    it('Should return the action', () => {
        const inputGuessVal = 25;
        const action = setInputGuessVal(inputGuessVal);
        expect(action.type).toEqual(SET_INPUT_GUESS_VAL);
        expect(action.inputGuessVal).toEqual(inputGuessVal);
    });
});
