import * as orderlistConstants from '../constants/strategyConstants.js';
export default function orderReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(orderlistConstants.GETORDER_REQUESTING):
            newState.status = 0;
            break;
        case (orderlistConstants.GETORDET_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        
        case orderlistConstants.GETORDER_REQUESTED:
             newState.status = 1;
             newState.result = action.result;
             break;
    }
    return newState;
}