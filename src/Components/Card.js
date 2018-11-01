
import React, { Component } from 'react';

const Card = ({ title, text, previewUrl }) => (
   <div className = "card" style= {{ "width": "18rem" }}>
	  <img className = "card-img-top img-responsive" src = { previewUrl } alt="Card image cap" />
	  <div className = "card-body">
	    <h5 className = "card-title">{ title }</h5>
	    <p className = "card-text">{ text }</p>
	  </div>
	</div>
);

export default Card;