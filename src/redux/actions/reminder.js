import { ADD_REMINDER } from "../../constants/action-types";
import store from "../store";

export function addReminder(drugId, dosage, sound, repeat, startDate, snooze) {
  console.log(drugId + " , " + dosage + " , " + sound + " , " + repeat + " , " + startDate);
  // if (typeof drug !== "number" || typeof sound !== "string" || typeof repeat !== "string" 
  // 	|| typeof dosage !== "string") {
  //   console.warn(
  //     "Required field left blank"
  //   );
  //   return {};
  // } else {	
		const newReminder = {
			"id": 8,
			"drugId": drugId,
			"time": startDate,
			"repeat": repeat,
			"dosage": dosage,
			"snooze": snooze,
		}
    return {
      type: ADD_REMINDER,
      reminder: newReminder
    };
  //}
}