import { ADD_DRUG, DELETE_DRUGS } from '../../constants/action-types';

export function addDrug(drug) {
  return {
    type: ADD_DRUG,
    drug,
  };
}

export function deleteDrugs(drugIds) {
  return {
    type: DELETE_DRUGS,
    drugIds,
  };
}

export function deleteDrug(drugId) {
  return {
    type: DELETE_DRUGS,
    drugIds: [drugId],
  };
}
