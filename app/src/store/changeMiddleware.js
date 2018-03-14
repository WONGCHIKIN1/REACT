import * as constants from '../constants/ajaxConstants'
import http from '../utils/httpclient'

export function middleware(api){
    return function(dispatch){
        return function(action){
            let {types, type, url, method = 'post',data = {}} = action;
            if(!url){
                return dispatch(action);
            }
            api.dispatch({type:constants.CHANGE_REQUESTING});
            if(url){
                return new Promise((resolve,reject)=>{
                    http[method](url)
                    .send(data)
                    .end((error,res) => {
                        console.log(res)
                        if(error){
                            api.dispatch({
                                type:constants.CHANGE_REQUESTERRO,
                                result:error
                            })
                            reject(error)
                        }else{
                            api.dispatch({
                                type:constants.CHANGE_REQUESTED,
                                result:res
                            })
                        }
                        resolve(res.body.data)
                    })
                })
                
            }
        }
    }
}