import moment from "moment";
import { testReminders } from "../../constants/constants";
import { ADD_REMINDER, UPDATE_REMINDER } from "../../constants/action-types";

const initialState = {
  reminders: testReminders || [],
  remindersId: 30
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      const newReminder = state.reminders.slice(0);
      newReminder.push(action.reminder);
      state = Object.assign({}, state, { reminders: newReminder });
      return state;
    case UPDATE_REMINDER:
      state = Object.assign({}, state, { reminders: action.reminders });
      return state;
    default:
      return state;
  }
};

export default remindersReducer;
