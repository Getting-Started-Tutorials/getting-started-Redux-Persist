
import React, { Component } from 'react';

class Card extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		console.log('this Card',this)
		return(
				<div className = "card" style= {{ "width": "18rem" }}>
				  <img className = "card-img-top img-responsive" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Card image cap" />
				  <div className = "card-body">
				    <h5 className = "card-title">Card title</h5>
				    <p className = "card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" className = "btn btn-primary">Go somewhere</a>
				  </div>
				</div>
		)
	}
}

export default Card;