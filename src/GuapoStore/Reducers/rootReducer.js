import React from 'react';
const rootReducer = (state, action) => {
  switch(action.type){
    case 'updatemyval':
      return {...state, myval:action.payload }
    case 'updatemyval2':
      return {...state, myval2:action.payload === true ? 'Hello' : 'Goodbye'}
    case 'toggle':
      return {...state, myval3:!action.payload.myval3}
    default: 
    return state;
  }
}

export default rootReducer;