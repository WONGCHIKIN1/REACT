import * as constants from '../constants/ajaxConstants.js'

export function registerAction(data){
    return{
        types:[constants.REGISTER_REQUESTING,constants.REGISTER_REQUESTED,constants.REGISTER_REQUESTERRO],
        url:'userregister',
        method:'post',
        data
    }
}