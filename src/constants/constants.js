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

export const asNeededDrugs = [
  {
    id: 1,
    key: "1",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#FFDF00"
  },
  {
    id: 2,
    key: "2",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#0000ff"
  },
  {
    id: 3,
    key: "3",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#009900"
  },
  {
    id: 4,
    key: "4",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#090990"
  },
  {
    id: 5,
    key: "5",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#123456"
  },
  {
    id: 6,
    key: "6",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#990099"
  }
];

export const drugsByEvents = [
  {
    time: "7:00 PM",
    key: "1",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Lorazepam",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#123456"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#990099"
      }
    ]
  },
  {
    time: "8:00 PM",
    key: "2",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Lorazepam",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#0000ff"
      }
    ]
  },
  {
    time: "9:00 PM",
    key: "3",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Tylenol",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        doctor: "Dr. Who",
        frequency: "5x a day",
        startDate: moment().subtract(3, "days"),
        endDate: moment(),
        color: "#0000ff"
      }
    ]
  }
];

export const testDrugs = [
  {
    id: 1,
    name: "Abemaciclib",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("19:00", "HH:mm"),
    endDate: moment(),
    color: "#FFDF00"
  },
  {
    id: 2,
    name: "Abraxane",
    dosage: "200mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("19:00", "HH:mm"),
    endDate: moment(),
    color: "#0000ff"
  },
  {
    id: 3,
    name: "Actemra",
    dosage: "300mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("19:00", "HH:mm"),
    endDate: moment().add(7, "days"),
    color: "#009900"
  },
  {
    id: 4,
    name: "Ado-Trastuzumab Emtansine",
    dosage: "400mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("21:00", "HH:mm"),
    endDate: moment().add(2, "days"),
    color: "#090990"
  },
  {
    id: 5,
    name: "Aminolevulinic Acid",
    dosage: "100mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("21:00", "HH:mm"),
    endDate: moment().endOf("isoWeek"),
    color: "#123456"
  },
  {
    id: 6,
    name: "Bevacizumab",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment("21:00", "HH:mm"),
    endDate: moment().add(10, "days"),
    color: "#990099"
  },
];


export const testReminders = [
  {
    id: 1,
    drugId: 1,
    time: moment("19:00", "HH:mm"),
    repeat: "week",
    dosage: "500mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 2,
    drugId: 2,
    time: moment("19:00", "HH:mm"),
    repeat: "week",
    dosage: "200mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 3,
    drugId: 3,
    time: moment("19:00", "HH:mm"),
    repeat: "week",
    dosage: "700mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 4,
    drugId: 4,
    time: moment("21:00", "HH:mm"),
    repeat: "day",
    dosage: "400mg",
    snooze: true,
    snoozeDrug: true
  },
  {
    id: 5,
    drugId: 5,
    time: moment("21:00", "HH:mm"),
    repeat: "day",
    dosage: "100mg",
    snooze: false,
    snoozeDrug: true
  }
];

export const testRemindersUnsorted = [
  {
    id: 1,
    drugId: 1,
    time: moment("19:00", "HH:mm"),
    repeat: "week",
    dosage: "500mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 2,
    drugId: 2,
    time: moment("21:00", "HH:mm"),
    repeat: "week",
    dosage: "200mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 3,
    drugId: 3,
    time: moment("21:00", "HH:mm"),
    repeat: "week",
    dosage: "700mg",
    snooze: false,
    snoozeDrug: false
  },
  {
    id: 4,
    drugId: 4,
    time: moment("19:00", "HH:mm"),
    repeat: "day",
    dosage: "400mg",
    snooze: true,
    snoozeDrug: true
  },
  {
    id: 5,
    drugId: 5,
    time: moment("21:00", "HH:mm"),
    repeat: "day",
    dosage: "100mg",
    snooze: false,
    snoozeDrug: true
  }
];

export const defaultReminder = {
  snooze: false,
  repeatIntervalCount: 1,
  repeatInterval: "week",
  selectedWeekdays: [false, false, false, false, false, false, false],
  endOccurenceCount: 1,
  endOccurence: "never",
  endDate: moment().subtract(10, "days"),
}

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

export const drugTypes = ["Anti-Cancer", "Side Effects", "Supplements", "Other"];
