import * as ajaxConstants from '../constants/ajaxConstants'
import * as strategyConstants from '../constants/landlordConstants'

export function getlandlord(){
    return {
        url: 'selectTravel',
    }
}

export function getpage(){
   
    return {
        url: 'selectAll',
        types:['a','b','c']
    }
}