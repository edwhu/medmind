import moment from "moment";

export const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

export const DAYS = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun"
};

export const testDrugs = [
  {
    id: 1,
    name: "Tylenol",
    startDate: moment().subtract(3, "days"),
    endDate: moment(),
    dosage: '500mg',
  },
  {
    id: 2,
    name: "Methamphetamine",
    startDate: moment().subtract(7, "days"),
    endDate: moment(),
    dosage: '200mg',
  },
  {
    id: 3,
    name: "Aspirin",
    startDate: moment().add(3, "days"),
    endDate: moment().add(7, "days"),
    dosage: '300mg',
  },
  {
    id: 4,
    name: "Antihistamine",
    startDate: moment(),
    endDate: moment().add(2, "days"),
    dosage: '400mg',
  },
  {
    id: 5,
    name: "DRUG 5",
    startDate: moment().subtract(7, "days"),
    endDate: moment().endOf("isoWeek"),
    dosage: '100mg',
  },
  {
    id: 6,
    name: "Drug 20 days",
    startDate: moment().subtract(10, "days"),
    endDate: moment().add(10, "days"),
    dosage: '500mg',
  }
];

export const testReminders = [
    { 
      id: 1, 
      drugId: 1, 
      time: moment(), 
      repeat: 'week', 
      dosage: '500mg'
    },
    { 
      id: 2, 
      drugId: 2, 
      time: moment(), 
      repeat: 'week', 
      dosage: '200mg'
    },
    { 
      id: 3, 
      drugId: 2, 
      time: moment(), 
      repeat: 'week', 
      dosage: '700mg'
    },
    { 
      id: 4, 
      drugId: 3, 
      time: moment(), 
      repeat: 'day', 
      dosage: '400mg'
    },
];
