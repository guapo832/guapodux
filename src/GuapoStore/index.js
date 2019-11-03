import {createContext, useContext} from 'react';
import rootReducer from './Reducers/rootReducer'

export const GuapoStore = createContext(rootReducer);
GuapoStore.displayName = "GuapoStore";

export const useGuapoStore = () => useContext(GuapoStore);

