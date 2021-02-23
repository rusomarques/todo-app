import { useContext } from 'react';
import { AppContext } from '../components/Provider';

export const useDispatch = () => {
  const store = useContext(AppContext);
  return store.dispatch;
};
