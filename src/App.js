import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GuapoStore } from './Components/GuapoStore';
import { MyTestComponent } from './Components/MyTestComponent'
function App() {
  return (
   
       <div className="App">
     <h1>Guapo State Management POC</h1>
      <p>This is a Proof of concept on Creating a State Management solution without the need to install state management package Such as Reduc</p>
      <GuapoStore>
        <MyTestComponent></MyTestComponent>
        <MyTestComponent></MyTestComponent>
      </GuapoStore>
    </div>
   
   
  );
}

export default App;
