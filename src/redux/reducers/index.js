import { combineReducers } from 'redux';
import remindersReducer from './reminders';
import drugInfoReducer from './drug';
import timelineReducer from './timeline';
import eventsReducer from './events';

const rootReducer = combineReducers({
  remindersReducer,
  timelineReducer,
  drugInfoReducer,
  eventsReducer,
});

export default rootReducer;
