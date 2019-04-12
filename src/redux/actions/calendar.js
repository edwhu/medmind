import { UPDATE_DAY } from '../../constants/action-types';

export function updateDay(currentDay) {
  return {
    type: UPDATE_DAY,
    currentDay
  };
}