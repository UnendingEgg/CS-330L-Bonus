import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 330L</h1>
      <h2>Section - 011</h2>
      <p>WVU ID: 800365882</p>
      <p>Hi, I am Chris!</p>
      <Card />
    </div>
  );
}

export default App;
