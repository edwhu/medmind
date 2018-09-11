import {
  UPDATE_MONTH,
  UPDATE_YEAR,
  UPDATE_CURRENT_WEEK,
  GET_PREVIOUS_WEEK,
  GET_NEXT_WEEK
} from "../../constants/action-types";
import { MONTHS } from "../../constants/constants";
import store from "../store";

export function updateMonth(newMonth) {
  // newMonth should be an int from 0-11
  if (typeof newMonth !== "number") {
    console.warn(
      "Unable to update the month with a non-number. Check to make sure you are using an integer from 0-11"
    );
    return {};
  } else {
    return {
      type: UPDATE_MONTH,
      month: newMonth
    };
  }
}

export function updateYear(newYear) {
  if (typeof newYear !== "number") {
    console.warn(
      "Unable to update the year with a non-number. Check to make sure you are using an integer to set the year"
    );
    return {};
  } else {
    return {
      type: UPDATE_YEAR,
      year: newYear
    };
  }
}

export function updateCurrentWeek(currentWeek) {
  return {
    type: UPDATE_CURRENT_WEEK,
    currentWeek
  };
}

export function getPreviousWeek(currentWeek, pageTracker, index) {
  const newIndex = parseInt(pageTracker[index]) - 1;
  const newWeek = {
    beginning: currentWeek.beginning.clone().subtract(7, "day"),
    end: currentWeek.beginning.clone().subtract(1, "day")
  };
  const newPageTracker = pageTracker.slice(); // need to make a deep copy
  newPageTracker.unshift(newIndex.toString());
  const timeline = store.getState().timelineReducer;
  if (currentWeek.beginning.month() !== timeline.currentMonth) {
    updateMonth(currentWeek.beginning.month());
  }
  if (currentWeek.beginning.year() !== timeline.currentYear) {
    updateYear(currentWeek.beginning.year());
  }
  return {
    type: GET_PREVIOUS_WEEK,
    week: newWeek,
    pageTracker: newPageTracker,
    weekIndex: newIndex
  };
}

export function getNextWeek(currentWeek, pageTracker, index) {
  const newIndex = parseInt(pageTracker[index]) + 1;
  const newWeek = {
    beginning: currentWeek.end.clone().add(1, "day"),
    end: currentWeek.end.clone().add(7, "day")
  };
  const newPageTracker = pageTracker.slice(); // need to make a deep copy
  newPageTracker.push(newIndex.toString());
  const timeline = store.getState().timelineReducer;
  if (currentWeek.beginning.month() !== timeline.currentMonth) {
    updateMonth(currentWeek.beginning.month());
  }
  if (currentWeek.beginning.year() !== timeline.currentYear) {
    updateYear(currentWeek.beginning.year());
  }
  return {
    type: GET_NEXT_WEEK,
    week: newWeek,
    pageTracker: newPageTracker,
    weekIndex: newIndex
  };
}
