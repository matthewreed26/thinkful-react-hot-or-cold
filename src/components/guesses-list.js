import React from 'react';

export default function GuessesList(props){
	let guesses = props.guesses.map((guess, index) => {
		let tempColor = guess.temp === 'Hot' ? 'red' : 'blue';
		return (<span style={{color:tempColor}}
			key={index}>{guess.value} </span>);
	});
	return (
		<div>{guesses}</div>
	);
};