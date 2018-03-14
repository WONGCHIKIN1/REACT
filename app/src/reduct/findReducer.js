import * as ajaxConstants from '../constants/ajaxConstants.js';
import * as strategyConstants from '../constants/landlordConstants';

export default function landlordReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'a':
            newState.status = 0;
            break;
         case 'b':
            newState.status = 1;
            newState.result = action.result;
            break;
        case '1':
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case 'c':
            newState.status = 1;
            break;
    }
    // console.log('1212121212',newState)
    return newState;
}