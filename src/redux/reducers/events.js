import { testEvents } from '../../constants/constants';

const initialState = {
  events: testEvents,
}; // events are keyed by ID

const eventsReducer = (state = initialState, action) => {
  return state;
};

export default eventsReducer;
