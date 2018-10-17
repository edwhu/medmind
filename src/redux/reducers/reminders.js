import moment from 'moment';

const initialState = {
  reminders: [
    { id: 1, drugId: 1, time: moment(), repeat: 'week', dosage: '500mg'},
    { id: 2, drugId: 2, time: moment(), repeat: 'week', dosage: '200mg'},
    { id: 3, drugId: 2, time: moment(), repeat: 'week', dosage: '700mg'},
    { id: 4, drugId: 3, time: moment(), repeat: 'day', dosage: '400mg'},
  ]
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default remindersReducer;