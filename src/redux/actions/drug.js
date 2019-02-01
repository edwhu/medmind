import { ADD_DRUG } from "../../constants/action-types";

export function addDrug(drug) {
  return {
    type: ADD_DRUG,
    drug
  };
}

export function deleteDrugs(drugIds) {
  return {
    type: DELETE_DRUG,
    drugIds
  };
}
