import * as constants from '../constants/ajaxConstants'
import http from '../utils/httpclient'

export function middleware(api){
    return function(dispatch){
        return function(action){
            let {types, type, url, method = 'post',data = {}} = action;
            if(!url){
                return dispatch(action);
            }
            api.dispatch({type:constants.REGISTER_REQUESTING});
            if(url){
                return new Promise((resolve,reject)=>{
                    http[method](url)
                    .send(data)
                    .end((error,res) => {
                        if(error){
                            api.dispatch({
                                type:constants.REGISTER_REQUESTERRO,
                                result:error
                            })
                            reject(error)
                        }else{
                            api.dispatch({
                                type:constants.REGISTER_REQUESTED,
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