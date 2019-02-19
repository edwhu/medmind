import { ADD_REMINDER, UPDATE_REMINDER, UPDATE_NEW_REMINDER } from "../../constants/action-types";
import store from "../store";

let nextId = 9000;

export function updateNewReminder(field, value) {
  return {
    type: UPDATE_NEW_REMINDER,
    field,
    value
  }
}

export function addReminder() {
  return {
    type: ADD_REMINDER,
    id: nextId++
  };
}

export function updateReminder(reminders) {
  if (typeof reminders === "undefined") {
    console.warn("Required field left blank");
    return {};
  } else {
    return {
      type: UPDATE_REMINDER,
      reminders: reminders
    };
  }
}