import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Checkbox
            checked={true}
            onChange={console.log("67")}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
            checked={true}
            onChange={console.log("67")}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
