import {
  ADD_DRUG,
} from "../../constants/action-types";
import { testDrugs } from '../../constants/constants';

let drugState = {
drugInfo: testDrugs || [],
};
export default drugInfoReducer = (state = drugState, action) => {
  switch (action.type) {
    case ADD_DRUG:
    let newDrugInfo = state.drugInfo;
    newDrugInfo.push(action.drug);
    state = Object.assign({}, state, {drugInfo: newDrugInfo});
    return state;
    default:
    return state;
  }
}