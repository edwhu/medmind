import { combineReducers } from 'redux';
import remindersReducer from './reminders';
import drugInfoReducer from "./drug";
import timelineReducer from "./timeline";

const rootReducer = combineReducers({
  remindersReducer,
  timelineReducer,
  drugInfoReducer
});

export default rootReducer;
