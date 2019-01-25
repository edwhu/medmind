import moment from "moment";
import { testReminders } from "../../constants/constants";
import { ADD_REMINDER, UPDATE_REMINDER, UPDATE_NEW_REMINDER } from "../../constants/action-types";

const initialState = {
  reminders: testReminders || [],
  remindersId: 30,
  newReminder: {
    repeatIntervalCount: 1,
    repeatInterval: 'weeks',
    selectedWeekdays: [false, false, false, false, false, false, false],
    occurence: 'never',
    endOccurenceCount: 1,
  },
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      const newReminderList = state.reminders.slice(0);
      newReminderList.push(state.newReminder);
      state = Object.assign({}, state, { reminders: newReminderList });
      return state;
    case UPDATE_REMINDER:
      state = Object.assign({}, state, { reminders: action.reminders });
      return state;
    case UPDATE_NEW_REMINDER:
      const updatedReminder = {
        ...state.newReminder,
        [action.field]: action.value,
      }
      state = Object.assign({}, state, { newReminder: updatedReminder });
      return state;
    default:
      return state;
  }
};

export default remindersReducer;
