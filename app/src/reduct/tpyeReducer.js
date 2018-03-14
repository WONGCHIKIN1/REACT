import * as orderConstants from '../constants/orderConstants';

export default function typeReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(orderConstants.TYPE_REQUESTING):
            newState.status = 0;
            break;
        case (orderConstants.TYPE_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        
        case orderConstants.TYPE_REQUESTED:
             newState.status = 1;
             newState.result = action.result;
             break;
    }
    return newState;
}