import { ADD_DRUG } from "../../constants/action-types";
import { EDIT_DRUG } from "../../constants/action-types";

export function addDrug(drug) {
  return {
    type: ADD_DRUG,
    drug
  };
}

export function editDrug(drug) {
  return {
    type: EDIT_DRUG,
    drug
  };
}
