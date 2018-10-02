import moment from "moment";
import {
    UPDATE_MONTH,
    UPDATE_YEAR,
    GET_PREVIOUS_WEEK,
    GET_NEXT_WEEK,
    UPDATE_CURRENT_WEEK,
  } from "../../constants/action-types";

const now = moment();
const start = now.clone().startOf("isoWeek");
const end = now.clone().endOf("isoWeek");
let weeks, newWeeks;
let timelineState = {
  currentMonth: now.month(),
  currentYear: now.year(),
  weeks: {
    "-1": {
      beginning: start.clone().subtract(7, "day"),
      end: start.clone().subtract(1, "day")
    },
    "0": {
      beginning: start,
      end: end
    },
    "1": {
      beginning: end.clone().add(1, "day"),
      end: end.clone().add(7, "day")
    }
  }, // store the weeks as an object where 0 is the current week
  pageTracker: ["-1", "0", "1"], // this is to help track the week swiper
  currentWeek: "0" // should be the key in weeks
};

export default timelineReducer = (state = timelineState, action) => {
  switch (action.type) {
    case UPDATE_MONTH:
      state = Object.assign({}, state, { currentMonth: action.month });
      return state;
    case UPDATE_YEAR:
      state = Object.assign({}, state, { currentYear: action.year });
      return state;
    case UPDATE_CURRENT_WEEK:
      state = Object.assign({}, state, { currentWeek: action.currentWeek });
      return state;
    case GET_PREVIOUS_WEEK: {
      // Saving all the weeks is causing the swiper to re-render every saved week, it'll be faster just to render 3 at a time
      // weeks = state.weeks;
      // newWeeks = Object.assign({}, weeks, {
      //   [action.weekIndex]: action.week
      // });
      // state = Object.assign({}, state, {
      //   weeks: newWeeks,
      //   pageTracker: action.pageTracker,
      //   currentWeek: (action.weekIndex + 1).toString()
      // });
      weeks = state.weeks;
      pageTracker = state.pageTracker;
      delete weeks[pageTracker.pop()]; // delete the last index and remove it from pageTracker
      newWeeks = Object.assign({}, weeks, {
        [action.weekIndex]: action.week
      });
      pageTracker.unshift(action.weekIndex.toString());
      state = Object.assign({}, state, {
        weeks: newWeeks,
        pageTracker,
        currentWeek: (action.weekIndex + 1).toString()
      });
      return state;
    }
    case GET_NEXT_WEEK: {
      // Same as above, just save 3 at a time
      // weeks = state.weeks;
      // newWeeks = Object.assign({}, weeks, {
      //   [action.weekIndex]: action.week
      // });
      // state = Object.assign({}, state, {
      //   weeks: newWeeks,
      //   pageTracker: action.pageTracker,
      //   currentWeek: (action.weekIndex - 1).toString()
      // });
      // return state;
      weeks = state.weeks;
      pageTracker = state.pageTracker;
      delete weeks[pageTracker.shift()];
      newWeeks = Object.assign({}, weeks, {
        [action.weekIndex]: action.week
      });
      pageTracker.push(action.weekIndex.toString());
      state = Object.assign({}, state, {
        weeks: newWeeks,
        pageTracker,
        currentWeek: (action.weekIndex - 1).toString()
      });
      return state;
    }
    default:
      return state;
  }
};