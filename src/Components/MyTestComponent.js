import React, {useState} from 'react'
import { useGuapoStore } from '../GuapoStore';

// state = {myval:1, myval2:'hello World', myval3:<div>test</div>}}
export const MyTestComponent = (props) => {
  
  const [state, dispatch] = useGuapoStore();
  const [myval2, setMyVal2] = useState(true)

  return <div style={{backgroundColor:"#CCCCCC"}}>
    <h3>Child Component</h3>
    { props.children }
  <p>myval {state.myval}<br />
  <button onClick={()=>{
     dispatch({type: 'updatemyval', payload:state.myval + 1});
   }}>update myval</button>
    </p>

    <p>myval2 {state.myval2}<br />
  <button onClick={()=>{
     setMyVal2(!myval2);
     dispatch({type: 'updatemyval2', payload:myval2});
   }}>update myval</button>
    </p>

    <p>myval3 <br />
    <div style={{'backgroundColor': state.myval3 === true ? 'red' : 'blue'}}>hello div</div><br />
    <button onClick={() => {
    dispatch({type:'toggle', payload:state})}}
    >Click Me</button>
    </p>
   
 </div>
}