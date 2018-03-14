import * as constants from '../constants/ajaxConstants.js'

export default function(state = {loading: false,result: {},error: {}},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.LOGIN_REQUESTING:
            state.loading = true;
            break;
        case constants.LOGIN_REQUESTED:
            state.loading = false;
            state.result = action.result;
            break;
        case constants.LOGIN_REQUESTERROR:
            state.loading = false;
            state.error = action.result;
            break;
    }
    return state;
}