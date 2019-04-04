import moment from 'moment';
import { UPDATE_WEEK } from '../../constants/action-types';

let initialState = {
  currentDay: moment().startOf('day'),
};

export default  (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_WEEK:
    const { currentWeek } = action;
    return {
      ...state,
      currentDay: currentWeek,
    };
  default:
    return state;
  }
};
