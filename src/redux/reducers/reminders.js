
const initialState = {
  reminders: [
    { id: 1, drugId: 1, time: 1000, repeat: 'week'},
    { id: 2, drugId: 1, time: 2000, repeat: 'week'},
  ]
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default remindersReducer;