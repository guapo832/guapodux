import React from 'react';
import './App.css';
import { MyTestComponent } from './Components/MyTestComponent'
import {GuapoStoreProvider} from './GuapoStore/Components/GuapoStoreProvider'
import  rootReducer  from './GuapoStore/Reducers/rootReducer';

function App() {
  return (
       
       <div className="App">
     <h1>Guapo State Management POC</h1>
      <p>This is a Proof of concept on Creating a State Management solution without the need to install state management package Such as Reduc</p>
   
     <GuapoStoreProvider reducer = {rootReducer} initialState={{myval:1, myval2:true, myval3:true}}>
        <MyTestComponent></MyTestComponent>
        <MyTestComponent></MyTestComponent>
     </GuapoStoreProvider>
    
     </div>
   
   
  );
}


export default App;
