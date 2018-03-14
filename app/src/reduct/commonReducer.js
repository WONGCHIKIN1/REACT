import * as strategyConstants from '../constants/orderConstants';

export default function commonReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case strategyConstants.COMMON_REQUESTING:
            newState.status = 0;
            break;
        case strategyConstants.COMMON_ERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case strategyConstants.COMMON_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
    }
    return newState;
}