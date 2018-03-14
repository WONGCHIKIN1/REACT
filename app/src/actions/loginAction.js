import * as constants from '../constants/ajaxConstants.js'

export function loginAction(data){
    return{
        types:[constants.LOGIN_REQUESTING,constants.LOGIN_REQUESTED,constants.LOGIN_REQUESTERROR],
        url:'userlogin',
        method:'get',
        data
    }
}