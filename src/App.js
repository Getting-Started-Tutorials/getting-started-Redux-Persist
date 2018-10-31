import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card'
import Form from './Components/Form'


// Redux Persist takes your Redux state object and saves it to persisted storage.
// Then on app launch it retrieves this persisted state and saves it back to redux.

class App extends Component {
  render() {
    return (
      <div className="">
          <Form />
      </div>
    );
  }
}

export default App;
