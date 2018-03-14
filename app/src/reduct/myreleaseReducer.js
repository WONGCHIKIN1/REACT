import * as ajaxConstants from '../constants/ajaxConstants.js';
import * as releaseConstants from '../constants/myreleaseConstants.js';

export default function releaseReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(ajaxConstants.AJAX_REQUESTING || releaseConstants.GETMYRELEASE_REQUESTING):
            newState.status = 0;
            break;
         case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR  || releaseConstants.GETMYRELEASE_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case releaseConstants.GETMYRELEASE_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
    }
    return newState;
}