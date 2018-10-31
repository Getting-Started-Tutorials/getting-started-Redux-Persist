import React, { Component } from 'react';
import './App.css';


// Redux Persist takes your Redux state object and saves it to persisted storage.
// Then on app launch it retrieves this persisted state and saves it back to redux.

class App extends Component {
  render() {
    return (
      <div className="App">
          <Card />
      </div>
    );
  }
}

export default App;
