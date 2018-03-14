import * as ajaxConstants from '../constants/ajaxConstants'
import * as strategyConstants from '../constants/strategyConstants.js'
import * as shareConstants from '../constants/shareConstants.js'
import * as orderConstants from '../constants/orderConstants'

export function getstrategy(){
    return {
        url: 'selectTravel',
        types:[strategyConstants.GETSTRATEGY_REQUESTING,strategyConstants.GETSTRATEGY_REQUESTED,strategyConstants.GETSTRATEGY_ERROR]
        
    }
}
export function getShare(n){
    return{
        url:'selectShare',
        data:{uid:n},
        types:[shareConstants.SHARE_REQUESTING,shareConstants.SHARE_REQUESTED,shareConstants.SHARE_ERROR],
    }
}
var page=0;
export function gethotel(city){
    page++;
    return{
        url:'selecthotel',
        data:{page:page,city:city},
        types:[strategyConstants.GETHOTEL_REQUESTING,strategyConstants.GETHOTEL_REQUESTED,strategyConstants.GETHOTEL_ERROR],
    }

}

export function getDetail(id){
    // console.log(id)
    return{
        url:'selecthid',
        data:{hid:id},
        types:[orderConstants.DETAIL1_REQUESTING,orderConstants.DETAIL1_REQUESTED,orderConstants.DETAIL1_ERROR]
    }
}


export function sorthotel(city,sort){
    return{
        url:'sorthotel',
        data:{sort:sort,city:city},
        types:[strategyConstants.GETHOTEL_REQUESTING,strategyConstants.GETHOTEL_REQUESTED,strategyConstants.GETHOTEL_ERROR],
    }
}

export function getorder(id){
    return{
        url:'getorder',
        data:{id:id},
        types:[strategyConstants.GETORDER_REQUESTING,strategyConstants.GETORDER_REQUESTED,strategyConstants.GETORDET_ERROR]
    }
}

export function setOrder(hid){
    // console.log(hid)
    return{
        url:'insertord',
        data:{room_id:hid},
        types:[orderConstants.ORDER_REQUESTING,orderConstants.ORDER_REQUESTED,orderConstants.ORDER_ERROR]
    }
}

export function updateType(id,type){
    return{
        url:'updateType',
        data:{id:id,type:type},
        types:[orderConstants.TYPE_REQUESTING,orderConstants.TYPE_REQUESTED,orderConstants.TYPE_ERROR]
    }
}

export function getCommon(){
    return{
        url:'selectcommon',
        types:[orderConstants.COMMON_REQUESTING,orderConstants.COMMON_REQUESTED,orderConstants.COMMON_ERROR]

    }
}