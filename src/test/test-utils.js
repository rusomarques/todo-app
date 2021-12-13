import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
/* eslint-disable-next-line */
import { createStore } from 'redux';
import Provider from '../common/components/Provider';
import reducer from '../common/store/reducer';

function render(ui, { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}) {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
// override React Testing Library's render with our own
export { render };
