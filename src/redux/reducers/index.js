import { combineReducers } from 'redux';

let exampleState = {something: []};

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