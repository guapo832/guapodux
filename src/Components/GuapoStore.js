import React, { useState } from 'react';


export const GuapoStore = (props) => {
  const useStore = useState(1);
  let elements = React.Children.toArray(props.children)
  let newElements = [];
  for(let i = 0; i < elements.length; i++ ) {
    newElements = [...newElements, React.cloneElement(props.children[i], { store: useStore , key:i})]
  }
  console.log(newElements)
return <div>
  <h2>Guapo Store</h2>
<p>This value is a state value stored in the GuapoStore: {useStore[0]}</p>
 {newElements}
 </div>
};
