import { TODOS_STORAGE_KEY } from '../constants';
import { getFromLocalStorage } from '../utils/localStorage';
import { ACTION_TYPES } from './actionTypes';

const initialState = getFromLocalStorage(TODOS_STORAGE_KEY, []);

const editTodo = (state, action) =>
  state.map(todo => (todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo));

const toggleIsDone = (state, action) =>
  state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));

/** ************* REDUCER ************************* */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload];
    case ACTION_TYPES.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case ACTION_TYPES.EDIT_TODO:
      return editTodo(state, action);
    case ACTION_TYPES.TOGGLE_IS_DONE:
      return toggleIsDone(state, action);

    default:
      return state;
  }
};

export default reducer;
