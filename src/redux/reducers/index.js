import { combineReducers } from "redux";

import drugInfoReducer from "./drug";
import timelineReducer from "./timeline";

const rootReducer = combineReducers({
  timelineReducer,
  drugInfoReducer,
});

export default rootReducer;
