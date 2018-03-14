import * as shareConstants from '../constants/shareConstants.js';
export default function shareReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(shareConstants.SHARE_REQUESTING):
            newState.status = 0;
            break;
        case (shareConstants.SHARE_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        
        case shareConstants.SHARE_REQUESTED:
             newState.status = 1;
             newState.result = action.result;
             break;
    }
    return newState;
}