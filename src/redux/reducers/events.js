import { testEvents } from '../../constants/constants';

// the structure of this will be
/**
 * The structure of this store will be:
 * {
 *  '05/16/1996': {
 *    '7:00': [
 *      event1,
 *      event2,
 *    ]
 *  }
 * }
 */

const initialState = {
  byDay: testEvents.reduce((acc, event) => {
    const day = event.time.format('YYYY/MM/DD');
    const hour = event.time.format('kk:mm');

    if (!acc[day]) {
      acc[day] = {};
    }

    if (!acc[day][hour]) {
      acc[day][hour] = [];
    }

    acc[day][hour].push(event);
    return acc;
  }, {}),
};

const eventsReducer = (state = initialState, action) => {
  const { type } = action;

  switch(type) {
  case 'TODO': 
    return state;
  default:
    return state;
  }
};

export default eventsReducer;
