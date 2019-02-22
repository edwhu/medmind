import { UPDATE_WEEK } from '../../constants/action-types';

export function updateWeek(currentWeek) {
  return {
    type: UPDATE_WEEK,
    currentWeek,
  };
}
