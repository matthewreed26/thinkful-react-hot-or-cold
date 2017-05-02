import React from 'react';

export default function Guess(props){
	return (
		<form onSubmit={(event)=>{
			event.preventDefault(); 
			props.onSubmit(props.inputGuessVal)}}>
			<input type='text' 
					onChange={(event)=>{props.onChange(event.target.value)}} />
			<button>Guess</button>
		</form>
	);
};