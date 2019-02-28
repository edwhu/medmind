import { 
  ADD_DRUG, 
  DELETE_DRUGS, 
  TOGGLE_DRUG_EDIT, 
  TOGGLE_DRUG_TO_DELETE,
  EDIT_DRUG
} from "../../constants/action-types";

export function addDrug(drug) {
  return {
    type: ADD_DRUG,
    drug,
  };
}

export function editDrug(drug) {
  return {
    type: EDIT_DRUG,
    drug,
  };
}

export function deleteDrugs() {
  // these are stored in redux, so there's no need to send them with the action
  return {
    type: DELETE_DRUGS,
  };
}

export function toggleDrugEdit() {
  return {
    type: TOGGLE_DRUG_EDIT,
  };
}

export function toggleDrugToDelete(drugId) {
  return {
    type: TOGGLE_DRUG_TO_DELETE,
    drugId,
  };
}
