import React from 'react'
import { useGuapoStore } from '../GuapoStore/Components/GuapoStoreProvider';

export const MyTestComponent = (props) => {
  const [state, dispatch] = useGuapoStore();
  console.log(state);
  return <div style={{backgroundColor:"#CCCCCC"}}>
    <h3>Child Component</h3>
    { props.children }
  <p>This value is a state value passed down to a child component from the Guapo Store: {state}  </p>
   <button onClick={()=>{
     dispatch({type: 'testing', payload:3});
   }}>update state</button>
 </div>
}