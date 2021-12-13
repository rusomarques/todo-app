/* eslint react/prop-types: 0 */
import React, { createContext } from 'react';

export const AppContext = createContext();

const Provider = ({ store, children }) => <AppContext.Provider value={store}>{children}</AppContext.Provider>;

export default Provider;
