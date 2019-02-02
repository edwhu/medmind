import { ADD_REMINDER, UPDATE_REMINDER } from "../../constants/action-types";
import store from "../store";

let nextId = 9000;

export function addReminder(drugId, dosage, sound, repeat, startDate, snooze) {
  if (
    typeof drugId !== "number" ||
    typeof sound !== "string" ||
    typeof repeat !== "string" ||
    typeof dosage !== "string"
  ) {
    console.warn("Required field left blank");
    return {};
  } else {
    if (repeat[0] == "E") {
      const words = repeat.split(" ");
      repeat = words[1];
    }
    const newReminder = {
      id: nextId++,
      drugId: drugId,
      time: startDate,
      repeat: repeat,
      dosage: dosage,
      snooze: snooze
    };
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