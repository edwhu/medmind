import { combineReducers } from 'redux';

let userState = {something: []};

const exampleReducer = (state = userState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  exampleReducer
});

export default rootReducer;