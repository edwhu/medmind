import { ADD_REMINDER, UPDATE_REMINDER, SET_NEW_REMINDER, UPDATE_NEW_REMINDER, SET_UPDATE_FLAG } from "../../constants/action-types";
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

export function updateReminder(reminder) {
  if (typeof reminder === "undefined") {
    console.warn("Reminder object undefined");
    return {};
  } else {
    return {
      type: UPDATE_REMINDER,
      reminder
    };
  }
}

export function setNewReminder(reminder) {
  if (typeof reminder === "undefined") {
    console.warn("Reminder object undefined");
    return {};
  } else {
    return {
      type: SET_NEW_REMINDER,
      reminder,
    };
  }
}

export function setUpdateFlag(flag) {
  return {
    type: SET_UPDATE_FLAG,
    flag,
  }
}
