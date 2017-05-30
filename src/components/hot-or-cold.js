import React from 'react';
import {connect} from 'react-redux';

import GuessTemp from './guess-temp';
import Guess from './guess';
import GuessesList from './guesses-list';
import {setWon, setLastTemp, setGuesses, setInputGuessVal} from '../actions';

export class HotOrCold extends React.Component{
	gameLogic(newGuessVal){
		let newGuessValue = parseInt(newGuessVal, 10);
		if(newGuessValue === this.props.answer){
			this.props.dispatch(setWon(true));
		}else{
			this.addGuessToGuesses(newGuessValue);
		}
	}
	addGuessToGuesses(newGuessValue){
		this.props.dispatch(setGuesses([...this.props.guesses,
			{'value':newGuessValue, 'temp':this.tempLogic(newGuessValue)}]));
	}
	tempLogic(guessValue){
		let differenceForTemp = Math.abs(guessValue-this.props.answer);
		let temp = 'Hot';
		if(differenceForTemp > 30){
			temp = 'Cold';
		}
		this.props.dispatch(setLastTemp(temp));
		return temp;
	}

	render(){
		let returnVal = (
			<div>
				<GuessTemp lastTemp={this.props.lastTemp} />
				<Guess onSubmit={(newValue)=>this.gameLogic(newValue)}
					onChange={(guessVal)=>this.props.dispatch(setInputGuessVal(guessVal))}
					inputGuessVal={this.props.inputGuessVal}/>
				<GuessesList guesses={this.props.guesses} />
			</div>
		);
		if(this.props.won){
			returnVal = (<span>Congrats you won</span>);
		}
		return returnVal;
	}
}

export const mapStateToProps = state => ({
  won:state.won,
  answer:state.answer,
  lastTemp:state.lastTemp,
  inputGuessVal:state.inputGuessVal,
  guesses:state.guesses
});

export default connect(mapStateToProps)(HotOrCold);
