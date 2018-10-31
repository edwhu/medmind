import moment from 'moment';
import { testReminders } from "../../constants/constants";

const initialState = {
	reminders: testReminders || []
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default remindersReducer;
