import React from 'react'


export const MyTestComponent = (props) => {
  const [ myState, setMyState ] = props.store;
  return <div style={{backgroundColor:"#CCCCCC"}}>
    <h3>Child Component</h3>
  <p>This value is a state value passed down to a child component from the Guapo Store: { myState }</p>
  

 <p>When I click the button it fires the onclick which calls the useState function passed from the GuapoStore<br />
 <button onClick = {() =>{ setMyState(myState + 1)}} >click me</button></p></div>
}