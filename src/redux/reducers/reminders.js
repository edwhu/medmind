import moment from "moment";
import { testReminders, defaultReminder } from "../../constants/constants";
import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER, UPDATE_NEW_REMINDER, SET_NEW_REMINDER, SET_UPDATE_FLAG, TOGGLE_DRUG_SNOOZE } from "../../constants/action-types";

const initialState = {
  reminders: testReminders || [],
  remindersId: 30,
  newReminder: defaultReminder || {},
  updateFlag: false,
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
      console.log(action.reminder);
      const updatedReminders = state.reminders.map(item => {
        return (item.id === action.reminder.id ? action.reminder : item);
      });
      return {
        ...state,
        reminders: updatedReminders,
      }
    case DELETE_REMINDER:
      const newReminders = state.reminders.filter(item => {
        return item[action.idType] !== action.id;
      });
      return {
        ...state,
        reminders: newReminders,
      }
    case TOGGLE_DRUG_SNOOZE:
        const toggledReminders = state.reminders.map(item => {
          if (item.drugId === action.drugId) {
            return {
              ...item,
              snooze: !item.snoozeDrug,
              snoozeDrug: !item.snoozeDrug
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          reminders: toggledReminders,
        }
    case SET_NEW_REMINDER:
      return {
        ...state,
        newReminder: action.reminder,
      }
    case UPDATE_NEW_REMINDER:
      console.log("in update new reminder reducer");
      const updatedReminder = {
        ...state.newReminder,
        [action.field]: action.value,
      }
      console.log(updatedReminder);
      return {
        ...state,
        newReminder: updatedReminder,
      }
    case SET_UPDATE_FLAG: 
      return {
        ...state,
        updateFlag: action.flag,
      }
    default:
      return state;
  }
};

export default remindersReducer;
