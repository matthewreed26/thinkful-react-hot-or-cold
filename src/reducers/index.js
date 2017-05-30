import {SET_WON, SET_ANSWER, SET_LAST_TEMP,
  SET_GUESSES, SET_INPUT_GUESS_VAL} from '../actions';

const initialState = {
  won:false,
  answer:Math.round(Math.random()*100),
  lastTemp:null,
  inputGuessVal:'',
  //will be a list of obj {'value':guessValue, 'temp':guessTemp}
  guesses:[]
};

export const hotOrColdReducer = (state=initialState, action) => {
    if (action.type === SET_WON) {
        return Object.assign({}, state, {
            won: action.won
        });
    }
    else if (action.type === SET_ANSWER) {
        return Object.assign({}, state, {
            answer: action.answer
        });
    }
    else if (action.type === SET_LAST_TEMP) {
        return Object.assign({}, state, {
            lastTemp: action.lastTemp
        });
    }
    else if (action.type === SET_GUESSES) {
        return Object.assign({}, state, {
            guesses: action.guesses
        });
    }
    else if (action.type === SET_INPUT_GUESS_VAL) {
        return Object.assign({}, state, {
            inputGuessVal: action.inputGuessVal
        });
    }
    return state;
};
