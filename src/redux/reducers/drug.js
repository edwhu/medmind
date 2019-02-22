import { ADD_DRUG, DELETE_DRUGS } from '../../constants/action-types';
import { testDrugs } from '../../constants/constants';

const drugState = {
  drugInfo: testDrugs || [],
  drugId: 30,
};

export default (drugInfoReducer = (state = drugState, action) => {
  switch (action.type) {
    case ADD_DRUG:
      const drug = { ...action.drug, id: state.drugId++ };
      const newDrugInfo = [...state.drugInfo, drug];
      state = { ...state, drugInfo: newDrugInfo };
      return state;
    case DELETE_DRUGS:
      const { drugIds } = action;
      return {
        ...state,
        drugInfo: state.drugInfo.filter(drug => !drugIds.includes(drug.id)),
      };
    default:
      return state;
  }
});
