import * as strategyConstants from '../constants/orderConstants.js';


export default function strategyReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(strategyConstants.DETAIL1_REQUESTING):
            newState.status = 0;
            break;
        case ( strategyConstants.DETAIL1_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case strategyConstants.DETAIL1_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
    }
    return newState;
}