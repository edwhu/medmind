import moment from 'moment';
import { UPDATE_DAY } from '../../constants/action-types';

let initialState = {
  currentDay: moment().startOf('day'),
};

export default  (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_DAY:
    const { currentDay } = action;
    return {
      ...state,
      currentDay,
    };
  default:
    return state;
  }
};
