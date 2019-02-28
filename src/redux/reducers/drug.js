import { ADD_DRUG } from "../../constants/action-types";
import { EDIT_DRUG } from "../../constants/action-types";
import { testDrugs, drugsByEvents } from "../../constants/constants";

let drugState = {
  drugInfo: testDrugs || [],
  drugId: 30
};
export default (drugInfoReducer = (state = drugState, action) => {
  switch (action.type) {
    case ADD_DRUG:
      const drug = { ...action.drug, id: state.drugId++ };
      const newDrugInfo = [...state.drugInfo, drug];
      state = { ...state, drugInfo: newDrugInfo };
      return state;

    case EDIT_DRUG:
      const editedDrug = action.drug;
      const updatedDrugInfo = [...state.drugInfo.filter(drug => drug.id !== editedDrug.id), 
                            Object.assign({}, editedDrug)];
      state = {...state, drugInfo: updatedDrugInfo};
      return state;

    default:
      return state;

  }
});
