import React from 'react';
import logo from './logo.svg';
import './App.css';
import Vote from './Vote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Vote/>
    </div>
  );
}

export default App;
