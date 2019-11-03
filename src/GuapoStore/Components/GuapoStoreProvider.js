import React, {useReducer } from 'react';

// export const GuapoStore = createContext();
import { GuapoStore } from '../'
import rootReducer from '../Reducers/rootReducer';

export const GuapoStoreProvider = ({children, reducer, initialState}) => 
   <GuapoStore.Provider value={useReducer(reducer, initialState)}>
      { children }
  </GuapoStore.Provider>
