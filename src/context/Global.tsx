
import React, { createContext, FC } from 'react';
import IGlobalContext from '../interfaces/IGlobalContext';

const initialValue:IGlobalContext = {
  selectedMenu: 'arquitetura'
};


const Context = createContext<IGlobalContext>(initialValue);

Context.displayName = 'GlobalContext';

const GlobalContext: FC = ({ children }: any) => (
  <Context.Provider value={initialValue}>
    {children}
  </Context.Provider>
)

export {GlobalContext, Context}

