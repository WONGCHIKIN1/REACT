import * as ajaxConstants from '../constants/ajaxConstants.js';
import * as strategyConstants from '../constants/strategyConstants.js';


export default function strategyReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case(strategyConstants.GETSTRATEGY_REQUESTING || ajaxConstants.AJAX_REQUESTING):
            newState.status = 0;
            break;
         case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || strategyConstants.GETSTRATEGY_ERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case strategyConstants.GETSTRATEGY_REQUESTED:
            newState.status = 1;
            newState.result = action.result;
            break;

    }
    return newState;
}