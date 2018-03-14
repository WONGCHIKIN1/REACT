import * as ajaxConstants from '../constants/ajaxConstants.js';
import * as releaseConstants from '../constants/releaseConstants.js';

export default function releaseReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(ajaxConstants.AJAX_REQUESTING || releaseConstants.DELETERELEASE_REQUESTING):
            newState.status = 0;
            break;
         case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR  || releaseConstants.DELETERELEASE_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case releaseConstants.DELETERELEASE_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
    }
    return newState;
}