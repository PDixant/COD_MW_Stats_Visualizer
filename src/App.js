import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import InputTextbox from './components/InputTextbox';
import CardContainer from './components/Card';
function App() {
  return (
    <div>
      <Landing/>
      <InputTextbox/>
      <CardContainer/>
    </div>
  );
}

export default App;
