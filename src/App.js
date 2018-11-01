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
        <div className="row">
          <div className="col-sm-4 marginTop">
            <div className="col-sm-8">
              <Form />
            </div>
          </div>

          <div className="col-sm-7 marginTop ">
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
