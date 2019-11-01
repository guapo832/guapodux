const rootReducer = (state = 0, action={type:"tewt", payload:1}) => {
  switch(action.type){
    case 'testing':
      return action.payload;
    default: 
    return state;
  }
}

export default rootReducer;