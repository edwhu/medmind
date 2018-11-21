import { ADD_DRUG } from "../../constants/action-types";

export function addDrug(drug) {
    return {
        type: ADD_DRUG,
        drug,
    };
}