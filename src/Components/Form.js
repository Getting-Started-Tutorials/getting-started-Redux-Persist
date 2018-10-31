import React, { Component } from "react";
import '../App.css'; 

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      title: "",
      text: ""
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this',this.state);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        previewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { previewUrl } = this.state;
   	const { text, title } = this.state;


    return (

      <div className = "container">

      <div className = "col-lg-4 marginTop">
		 <div className ="col-md-8">
		    <div className ="form-group">

		 <div className = "marginTop">
	        <label htmlFor="title">Title:</label>
  			<input type="text" className = "form-control" value = { title } onChange = { e => this.setState({ title: e.target.value })}/>
  		 </div>
  		
  		<div className = "marginTop">
		    <label htmlFor="text">Text:</label>
  			<input type="text" className = "form-control" value = { text } onChange = { e => this.setState({ text: e.target.value })}/>
  		</div>

  		<div className = "marginTop" >
	        <img src = { this.state.previewUrl } className = "rounded" width = "100px" alt="Cinque Terre" />
	    </div>

	        <div className = "marginTop">
		        <label>Upload Image: </label>
		        <div className ="input-group">
		            <span className ="input-group-btn">
		                <span className ="btn btn-default btn-file">
		                    Browse… <input type="file"    onChange = { this.handleImageChange } className ="form-control" />
		                </span>
		            </span>
		            <input type="text" className="form-control" readOnly />
		        </div>
	        </div>
		    <button type="submit" onClick  = { this.handleSubmit } className ="btn btn-default marginTop">Submit</button>
		  </div>
		</div>
      </div>

     <div className = "marginTop ">
      <div className = "col-lg-7 cards">
      		<div class="card" style= {{ "width": "18rem" }}>
			  <img class="card-img-top img-responsive" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Card image cap" />
			  <div class="card-body">
			    <h5 class="card-title">Card title</h5>
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" class="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
      </div>
     </div>

     </div>
    );
  }
}

export default Form;
