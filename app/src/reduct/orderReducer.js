import * as ajaxConstants from '../constants/ajaxConstants.js';
import * as strategyConstants from '../constants/orderConstants';

export default function orderReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case strategyConstants.ORDER_REQUESTING:
            newState.status = 0;
            break;
        case strategyConstants.ORDER_ERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case strategyConstants.ORDER_REQUESTED:
            // console.log(action)
            newState.status = 1;
            newState.result = action.result;
            break;
    }
    return newState;
}