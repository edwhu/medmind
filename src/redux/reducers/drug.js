import { ADD_DRUG } from "../../constants/action-types";
import { testDrugs } from "../../constants/constants";

let drugState = {
  drugInfo: testDrugs || [],
  drugId: 30,
};
export default (drugInfoReducer = (state = drugState, action) => {
  switch (action.type) {
    case ADD_DRUG:
      const drug = {...action.drug, id: state.drugId++ };
      const newDrugInfo = [...state.drugInfo, drug];
      state = {...state, drugInfo: newDrugInfo };
      return state;
    default:
      return state;
  }
});
