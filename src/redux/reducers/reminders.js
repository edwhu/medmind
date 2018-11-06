import moment from "moment";
import { testReminders } from "../../constants/constants";
import { ADD_REMINDER } from "../../constants/action-types";

const initialState = {
	reminders: testReminders || []
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
  	case ADD_REMINDER:
  		const newReminder = state.reminderInfo;
      newReminder.push(action.reminder);
      state = Object.assign({}, state, { reminders: newReminder });
  		return state;
    default:
      return state;
  }
};

export default remindersReducer;
