import moment from "moment";
import { UPDATE_WEEK } from "../../constants/action-types";

const now = moment();
const start = now.clone().startOf("isoWeek");

let timelineState = {
  currentMonth: now.month(),
  currentYear: now.year(),
  currentWeek: start,
};

export default (timelineReducer = (state = timelineState, action) => {
  switch (action.type) {
    case UPDATE_WEEK:
      const { currentWeek } = action;
      state = Object.assign({}, state, { 
        currentWeek,
        currentMonth: currentWeek.month(),
        currentYear: currentWeek.year(),
      });
      return state;
    default:
      return state;
  }
});
