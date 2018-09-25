import { combineReducers } from 'redux';
import remindersReducer from './reminders';

let userState = {something: []};

const exampleReducer = (state = userState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  exampleReducer,
  remindersReducer
});

export default rootReducer;