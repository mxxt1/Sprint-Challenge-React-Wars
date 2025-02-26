import React from 'react';
import './App.css';
import CharContainer from '../src/components/CharContainer'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

 //added to CharContainer.js

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //added to CharContainer.js




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharContainer />
      </div>
  );
}

export default App;
