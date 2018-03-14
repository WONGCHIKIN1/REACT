import * as ajaxConstants from '../constants/ajaxConstants'
import * as releaseConstants from '../constants/releaseConstants'

export function getstrategy(){
    return {
        url: 'myrelease', 
    }
}
export function deleteRelease(_data){
    return {
        types:[releaseConstants.DELETERELEASE_REQUESTING,releaseConstants.DELETERELEASE_REQUESTED,releaseConstants.DELETERELEASE_ERROR],
        url: 'deleteRelease', 
        data:{id:_data}
    }
}