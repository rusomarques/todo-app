import { useContext, useRef, useEffect, useReducer } from 'react';
import { AppContext } from '../components/Provider';

const forcedReducer = state => !state;
const useForceUpdate = () => useReducer(forcedReducer, false)[1];

export const useSelector = (selector = state => state) => {
  const store = useContext(AppContext);
  const stateRef = useRef(store.getState());
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const updateStateRef = () => {
      stateRef.current = store.getState();
      forceUpdate();
    };
    const unsubscribe = store.subscribe(updateStateRef);

    return unsubscribe;
  }, [forceUpdate, store]);

  return selector(stateRef.current);
};
