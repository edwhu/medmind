import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER, SAVE_NEW_REMINDER, SET_NEW_REMINDER, UPDATE_NEW_REMINDER, SET_UPDATE_FLAG, TOGGLE_DRUG_SNOOZE } from '../../constants/action-types';

let nextId = 9000;

export function updateNewReminder(field, value) {
  return {
    type: UPDATE_NEW_REMINDER,
    field,
    value
  };
}

export function addReminder(drug) {
  return {
    type: ADD_REMINDER,
    id: nextId++,
    drug
  };
}

export function updateReminder(reminder) {
  if (typeof reminder === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('Reminder object undefined');
    return {};
  }
  return {
    type: UPDATE_REMINDER,
    reminder
  };
}

export function toggleDrugSnooze(drugId) {
  return {
    type: TOGGLE_DRUG_SNOOZE,
    drugId
  };
}

export function deleteReminder(idType, id) {
  return {
    type: DELETE_REMINDER,
    idType,
    id
  };
}

export function saveNewReminder() {
  return {
    type: SAVE_NEW_REMINDER
  };
}

export function setNewReminder(reminder) {
  if (typeof reminder === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('Reminder object undefined in setNewReminder action');
    return {};
  } else {
    return {
      type: SET_NEW_REMINDER,
      reminder,
    };
  }
}

export function setUpdateFlag(flag) {
  return {
    type: SET_UPDATE_FLAG,
    flag,
  };
}
