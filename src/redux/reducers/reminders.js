import moment from "moment";

const initialState = {
  reminders: [
    { id: 1, drugId: 1, time: moment(), repeat: "week" },
    { id: 2, drugId: 1, time: moment(), repeat: "week" }
  ]
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default remindersReducer;
