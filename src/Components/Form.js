import React, { Component } from "react";
import "../App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      title: "",
      text: ""
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { state } = this
    this.props.saveCard(state);
    this.setState({ file: "", title: "", text: "", previewUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"})
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        previewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { previewUrl } = this.state;
    const { text, title } = this.state;

    return (
      <div className="form-group">
        <div className="marginTop">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>

        <div className="marginTop">
          <label htmlFor="comment">Text:</label>
          <textarea className="form-control" rows="3" value = { text } onChange={e => this.setState({ text: e.target.value })} ></textarea>
        </div>


        <div className="marginTop">
          <img
            src = {this.state.previewUrl}
            className = "rounded"
            width = "100px"
            alt = "Cinque Terre"
          />
        </div>

        <div className="marginTop">
          <label>Upload Image: </label>
          <div className="input-group">
            <span className="input-group-btn">
              <span className="btn btn-default btn-file">
                Browse…{" "}
                <input
                  type="file"
                  onChange={this.handleImageChange}
                  className="form-control"
                />
              </span>
            </span>
            <input type="text" className="form-control" readOnly />
          </div>
        </div>
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-default marginTop"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
