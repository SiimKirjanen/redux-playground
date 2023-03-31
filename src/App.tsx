import React from 'react';

import './App.css';
import Users from './components/Users';
import Counter from './components/Counter';

function App() {
  return (
    <div className="app">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
