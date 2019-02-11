import moment from "moment";
import { testReminders, defaultReminder } from "../../constants/constants";
import { ADD_REMINDER, UPDATE_REMINDER, UPDATE_NEW_REMINDER, SET_NEW_REMINDER } from "../../constants/action-types";

const initialState = {
  reminders: testReminders || [],
  remindersId: 30,
  newReminder: defaultReminder || {},
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      const newReminder = {
        ...state.newReminder,
        id: action.id
      }
      return {
        ...state,
         reminders: state.reminders.concat(newReminder),
         newReminder: defaultReminder,
      }
    case UPDATE_REMINDER:
      state = Object.assign({}, state, { reminders: action.reminders });
      return state;
    case SET_NEW_REMINDER:
      console.log("in redux state");
      console.log(action.reminder);
      state = Object.assign({}, state, { newReminder: action.reminder });
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
