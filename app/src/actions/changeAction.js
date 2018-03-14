import * as constants from '../constants/ajaxConstants.js'

export function changeAction(data){
    return{
        types:[constants.CHANGE_REQUESTING,constants.CHANGE_REQUESTED,constants.CHANGE_REQUESTERRO],
        url:'userchange',
        method:'post',
        data
    }
}