import * as constants from '../constants/ajaxConstants.js'

export default function(state = {loading: false,result: {},error: {}},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.CHANGE_REQUESTING:
            state.loading = true;
            break;
        case constants.CHANGE_REQUESTED:
            state.loading = false;
            state.result = action.result;
            break;
        case constants.CHANGE_REQUESTERRO:
            state.loading = false;
            state.error = action.result;
            break;
    }
    return state;
}