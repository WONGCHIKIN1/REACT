import * as constants from '../constants/ajaxConstants.js'

export default function(state = {loading: false,result: {},error: {}},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.REGISTER_REQUESTING:
            state.loading = true;
            break;
        case constants.REGISTER_REQUESTED:
            state.loading = false;
            state.result = action.result;
            break;
        case constants.REGISTER_REQUESTERRO:
            state.loading = false;
            state.error = action.result;
            break;
    }
    return state;
}