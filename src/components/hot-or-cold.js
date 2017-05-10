import React from 'react';

import GuessTemp from './guess-temp';
import Guess from './guess';
import GuessesList from './guesses-list';

export default class HotOrCold extends React.Component{
	constructor(props){
		super(props);
		this.state={
			won:false,
			answer:Math.round(Math.random()*100),
			lastTemp:null,
			inputGuessVal:'',
			//will be a list of obj {'value':guessValue, 'temp':guessTemp}
			guesses:[]
		};
	}
	gameLogic(newGuessVal){
		let newGuessValue = parseInt(newGuessVal,10);
		if(newGuessValue === this.state.answer){
			this.setWon(true);
		}else{
			this.addGuessToGuesses(newGuessValue);
		}
	}
	addGuessToGuesses(newGuessValue){
		this.setGuesses([...this.state.guesses, 
			{'value':newGuessValue, 'temp':this.tempLogic(newGuessValue)}]);
	}
	tempLogic(guessValue){
		let differenceForTemp = Math.abs(guessValue-this.state.answer);
		let temp = 'Hot';
		if(differenceForTemp > 30){
			temp = 'Cold';
		}
		this.setLastTemp(temp);
		return temp;
	}
	setWon(won){
		this.setState({won});
	}
	setLastTemp(lastTemp){
		this.setState({lastTemp});
	}
	setGuesses(guesses){
		this.setState({guesses});
	}
	setInputGuessVal(inputGuessVal){
		this.setState({inputGuessVal});
	}

	render(){
		let returnVal = (
			<div>
				<GuessTemp lastTemp={this.state.lastTemp} />
				<Guess onSubmit={(newValue)=>this.gameLogic(newValue)} 
					onChange={(guessVal)=>this.setInputGuessVal(guessVal)}
					inputGuessVal={this.state.inputGuessVal}/>
				<GuessesList guesses={this.state.guesses} />
			</div>
		);
		if(this.state.won){
			returnVal = (<span>Congrats you won</span>);
		}
		return returnVal;
	}
}