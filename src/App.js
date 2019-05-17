import React from 'react';
import logo from './logo.svg';
import Counter from './counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello React 16.8.0
        <span style={{ marginRight: 10, fontSize: 14, color: 'yellowgreen' }}>
          Simple useState Hook:{' '}
          <span style={{ color: 'white', marginRight: 10 }}>Counter</span>
          <Counter />
        </span>
      </header>
    </div>
  );
}

export default App;
