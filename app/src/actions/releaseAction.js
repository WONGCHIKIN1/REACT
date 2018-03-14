import * as ajaxConstants from '../constants/ajaxConstants'
import * as releaseConstants from '../constants/releaseConstants'

export function getstrategy(_city,_district,_date,_room){
    return {
        types:[releaseConstants.GETRELEASE_REQUESTING,releaseConstants.GETRELEASE_REQUESTED,releaseConstants.GETRELEASE_ERROR],
        url: 'release',
        data:{
            city:_city,
            district:_district,
            date:_date,
            room:_room
        },
        method:'post'  
    }
}