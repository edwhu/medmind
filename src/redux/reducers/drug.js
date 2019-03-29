import { ADD_DRUG, DELETE_DRUGS, TOGGLE_DRUG_EDIT, TOGGLE_DRUG_TO_DELETE, EDIT_DRUG } from '../../constants/action-types';
import { testDrugs } from '../../constants/constants';


let drugState = {
  drugInfo: testDrugs || [],
  drugId: 30,
  editing: false,
  drugIdsToDelete: [],
};

export default (state = drugState, action) => {
  switch (action.type) {
  case ADD_DRUG:
    const drug = { ...action.drug, id: state.drugId++ };
    return { 
      ...state, 
      drugInfo: [...state.drugInfo, drug]
    };
  case DELETE_DRUGS:
    return {
      ...state,
      drugInfo: state.drugInfo.filter(drug => !state.drugIdsToDelete.includes(drug.id)),
      drugIdsToDelete: [],
    };
  case TOGGLE_DRUG_EDIT: 
    return {
      ...state,
      editing: !state.editing,
      drugIdsToDelete: [],
    };
  case TOGGLE_DRUG_TO_DELETE: 
    const { drugId } = action;
    const index = state.drugIdsToDelete.findIndex(id => id === drugId);

    if (index > -1) {
      return {
        ...state,
        drugIdsToDelete: state.drugIdsToDelete.filter(id => id !== drugId),
      };
    }
      
    return {
      ...state,
      drugIdsToDelete: [...state.drugIdsToDelete, drugId],
    };
  case EDIT_DRUG:
    const editedDrug = action.drug;
    const updatedDrugInfo = [...state.drugInfo.filter(drug => drug.id !== editedDrug.id), 
      Object.assign({}, editedDrug)];
    state = {...state, drugInfo: updatedDrugInfo};
    return state;
  default:
    return state;
  }
};
