import React from 'react';
import logo from './logo.svg';
import Counter from './counter-localStorage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React 16.8.0</h1>
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
