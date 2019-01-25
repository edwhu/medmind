import { ADD_REMINDER, UPDATE_REMINDER } from "../../constants/action-types";
import store from "../store";

let nextId = 9000;

export function addReminder(reminder) {
  if (
    typeof reminder.drugId !== "number" ||
    typeof reminder.sound !== "string" ||
    typeof reminder.repeat !== "string" ||
    typeof reminder.dosage !== "string"
  ) {
    console.warn("Required field left blank");
    return {};
  } else {
    if (reminder.repeat[0] == "E") {
      const words = reminder.repeat.split(" ");
      reminder.repeat = words[1];
    }
    const newReminder = {
      ...reminder,
      id: nextId++
    }
    console.log("_______NEW REMINDER BEING ADDED: " + newReminder);
    return {
      type: ADD_REMINDER,
      reminder: newReminder
    };
  }
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
