import React from 'react';

export default function GuessTemp(props){
	let tempColor = props.lastTemp === 'Hot' ? 'red' : 'blue';
	return (
		<span style={{color:tempColor}}>{props.lastTemp}</span>
	);
};