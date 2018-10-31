import React, { Component } from "react";
import "./App.css";
import CardList from "./Containers/cardContainer";
import Form from "./Containers/formContainer";

// Redux Persist takes your Redux state object and saves it to persisted storage.
// Then on app launch it retrieves this persisted state and saves it back to redux.

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-4 marginTop">
          <div className="col-md-8">
            <Form />
          </div>
        </div>
        <div className=" col-lg-7 marginTop ">
          <div className="col-lg-7 cards">
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
