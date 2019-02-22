import { ADD_DRUG, DELETE_DRUGS } from "../../constants/action-types";
import { testDrugs } from "../../constants/constants";

let drugState = {
  drugInfo: testDrugs || [],
  drugId: 30,
  editing: false,
};

export default (drugInfoReducer = (state = drugState, action) => {
  switch (action.type) {
    case ADD_DRUG:
      const drug = { ...action.drug, id: state.drugId++ };
      return { 
        ...state, 
        drugInfo: [...state.drugInfo, drug]
      };
    case DELETE_DRUGS:
      const { drugIds } = action;
      return {
        ...state,
        drugInfo: state.drugInfo.filter(drug => !drugIds.includes(drug.id))
      };
    case TOGGLE_DRUG_EDIT: 
      return {
        ...state,
        editing: !state.editing,
      };
    default:
      return state;
  }
});
