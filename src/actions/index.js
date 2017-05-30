export const SET_WON = 'SET_WON';
export const setWon = won => ({
    type: SET_WON,
    won
});


export const SET_LAST_TEMP = 'SET_LAST_TEMP';
export const setLastTemp = lastTemp => ({
    type: SET_LAST_TEMP,
    lastTemp
});


export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guesses => ({
    type: SET_GUESSES,
    guesses
});


export const SET_INPUT_GUESS_VAL = 'SET_INPUT_GUESS_VAL';
export const setInputGuessVal = inputGuessVal => ({
    type: SET_INPUT_GUESS_VAL,
    inputGuessVal
});
