import { 
  ADD_DRUG, 
  DELETE_DRUGS, 
  TOGGLE_DRUG_EDIT, 
  TOGGLE_DRUG_TO_DELETE,
} from "../../constants/action-types";

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

export function toggleDrugToDelete(drugId) {
  return {
    type: TOGGLE_DRUG_TO_DELETE,
    drugId,
  };
}
