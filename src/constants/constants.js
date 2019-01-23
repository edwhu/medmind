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
    name: "Abemaciclib",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().subtract(3, "days"),
    endDate: moment(),
    color: "#FFDF00"
  },
  {
    id: 2,
    name: "Abraxane",
    dosage: "200mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().subtract(7, "days"),
    endDate: moment(),
    color: "#0000ff"
  },
  {
    id: 3,
    name: "Actemra",
    dosage: "300mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().add(3, "days"),
    endDate: moment().add(7, "days"),
    color: "#009900"
  },
  {
    id: 4,
    name: "Ado-Trastuzumab Emtansine",
    dosage: "400mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment(),
    endDate: moment().add(2, "days"),
    color: "#090990"
  },
  {
    id: 5,
    name: "Aminolevulinic Acid",
    dosage: "100mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().subtract(7, "days"),
    endDate: moment().endOf("isoWeek"),
    color: "#123456"
  },
  {
    id: 6,
    name: "Bevacizumab",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().subtract(10, "days"),
    endDate: moment().add(10, "days"),
    color: "#990099"
  },
];

console.log(testDrugs);

export const testReminders = [
  {
    id: 1,
    drugId: 1,
    time: moment().add(2000),
    repeat: "week",
    dosage: "500mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 2,
    drugId: 2,
    time: moment(),
    repeat: "week",
    dosage: "200mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 3,
    drugId: 2,
    time: moment(),
    repeat: "week",
    dosage: "700mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 4,
    drugId: 3,
    time: moment(),
    repeat: "day",
    dosage: "400mg",
    snooze: true,
    snoozeDrug: true
  },
  {
    id: 5,
    drugId: 4,
    time: moment(),
    repeat: "day",
    dosage: "100mg",
    snooze: false,
    snoozeDrug: true
  }
];

export const testSounds = [
  "Beacon",
  "Bulletin",
  "By the Seaside",
  "Circuit",
  "Constellation",
  "Cosmic",
  "Crystals",
  "Illuminate",
  "Night Owl",
  "Play Time",
  "Radar"
];
