import './App.css';
import React from 'react';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Deep React App</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default App;
