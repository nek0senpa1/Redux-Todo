import { combineReducers } from 'redux';
import todoey from './todos';

import { activey } from './activeTodo';

const rootReducer = combineReducers({
  todos: todoey,
  activeTodo: activey
});

export default rootOfAllReduxEvil;