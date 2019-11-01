import React, {createContext, useContext, useReducer } from 'react';

export const GuapoStore = createContext();

export const GuapoStoreProvider = ({children, reducer, initialState}) => 
   <GuapoStore.Provider value={useReducer(reducer, initialState)}>
      { children }
  </GuapoStore.Provider>

export const useGuapoStore = () => useContext(GuapoStore);
