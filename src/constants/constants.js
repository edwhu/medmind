import moment from 'moment';

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
    label: "Tylenol",
    startDate: moment().subtract(3, "days"),
    endDate: moment()
  },
  {
    label: "Methamphetamine fkdsal;f kasd;lfkapowe",
    startDate: moment().subtract(7, "days"),
    endDate: moment()
  },
  {
    label: "Aspirin",
    startDate: moment().add(3, "days"),
    endDate: moment().add(7, "days")
  },
  {
    label: "Antihistamine",
    startDate: moment(),
    endDate: moment().add(2, "days")
  },
  {
    label: "DRUG 5",
    startDate: moment().subtract(7, "days"),
    endDate: moment().endOf("isoWeek")
  },
  {
    label: "Drug 20 days",
    startDate: moment().subtract(10, "days"),
    endDate: moment().add(10, "days")
  },
];