import * as hotelConstants from '../constants/strategyConstants.js';
export default function shareReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(hotelConstants.GETHOTEL_REQUESTING):
            newState.status = 0;
            break;
        case (hotelConstants.GETHOTEL_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        
        case hotelConstants.GETHOTEL_REQUESTED:
             newState.status = 1;
             newState.result = action.result;

             break;
    }
    return newState;
}