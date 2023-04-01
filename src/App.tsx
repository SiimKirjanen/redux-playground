import React from 'react';

import './App.css';
import Users from './components/Users';
import Counter from './components/Counter';
import Products from './components/Products';
import Posts from './components/Posts';

function App() {
  return (
    <div className="app">
      <Counter />
      <Users />
      <Products />
      <Posts />
    </div>
  );
}

export default App;
