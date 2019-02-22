import { ADD_DRUG, DELETE_DRUGS, TOGGLE_DRUG_EDIT } from "../../constants/action-types";

export function addDrug(drug) {
  return {
    type: ADD_DRUG,
    drug
  };
}

export function deleteDrugs(drugIds) {
  return {
    type: DELETE_DRUGS,
    drugIds
  };
}

export function toggleDrugEdit() {
  return {
    type: TOGGLE_DRUG_EDIT,
  };
}
