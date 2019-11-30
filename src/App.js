import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import InputTextbox from './components/InputTextbox';
import KDratio from './components/KDratio';
function App() {
  return (
    <div>
      <Landing/>
      <InputTextbox/>
      <KDratio/>
    </div>
  );
}

export default App;
