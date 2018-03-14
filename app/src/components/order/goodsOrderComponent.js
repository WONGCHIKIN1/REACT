import React, {Component} from 'react'
import './goodsOrder.scss'
import baseurl from '../../baseurl'

import {connect} from 'react-redux'
import {hashHistory,Link} from 'react-router'
import * as actions from '../../actions/strategyAction.js';

class GoodsOrderComponent extends Component{
    componentWillMount(){
        this.props.getDetail(this.props.location.query.hid)
    }
    cancel(){
        this.props.updateType(this.props.location.query.orderid,3).then(function(results){
            if(results.message.split('Changed:')[1].trim().slice(0,1) == 0){
                alert('订单已取消')
                hashHistory.push({  
                    pathname: '/recommend'
                })    
            }else{
                alert('订单取消成功')
                hashHistory.push({  
                    pathname: '/discover/find'
                })  
            }
        }.bind(this))
    }
    payment(){
        this.props.updateType(this.props.location.query.orderid,1).then(function(results){
            if(results.message.split('Changed:')[1].trim().slice(0,1) == 0){
                alert('订单已支付')
                hashHistory.push({  
                    pathname: '/recommend'
                })    
            }else{
                alert('支付成功')
                hashHistory.push({  
                    pathname: '/order/orderlist'
                })  
            }
        }.bind(this))
    }
    render(){
        return (
            <div className="goodsorder">
                <div className="head">
                    <Link to={'detail?hid='+this.props.location.query.hid}><i className="chevron left icon" data-filtered="filtered"></i></Link>
                    <span>订单详情</span>
                </div>
                <div className="head_t">
                    <p>待确认</p>
                    <span>等待房东确认订单</span>
                    <i className="file outline icon" data-filtered="filtered"></i>
                </div>
                <div className="head_b">
                    您的订单已提交，正在等待房东确认
                </div>
                <div className="mains">
                    <div className="mains_t">
                        <div className="indent clearfix">
                                <img src={this.props.ajaxResult.map(item=>{
                                    return item.image_src
                                })}/>
                            <div className="indent_r">
                                <p>{this.props.ajaxResult.map(item=>{
                                    return item.title
                                })}</p>
                                <p>2018-03-01 至 2018-03-02</p>
                                <p>1套 共1晚</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mains_c">
                        <ul className="mains_c_t">
                            <li>
                                <span>房东：{this.props.ajaxResult.map(item=>{
                                            // console.log(item)
                                            return item.title
                                        })}
                                </span>
                                <span style={{color:"#F88B84"}}><i className="calendar outline icon" data-filtered="filtered" style={{color:"#F88B84"}}></i>联系房东</span>
                            </li>
                            <li>
                                <span>房东手机号</span>
                                <span style={{color:"#B5B5B5"}}>待入住显示</span>
                            </li>
                            <li>
                                <span>地址：榆路北段</span>
                                <span><i className="angle right icon" data-filtered="filtered" style={{color:"#B5B5B5"}}></i></span>
                            </li>
                        </ul>
                        <ul className="mains_c_t mains_c_b">
                            <li>
                                <span>交易信息</span>
                                <span style={{color:"#F88B84"}}>入住前7天可退</span>
                            </li>
                            <li>
                                <span>房款总额</span>
                                <span style={{color:"#B5B5B5"}}>￥{
                                        this.props.ajaxResult.map(item=>{
                                        return item.price.slice(0,item.price.length-1)
                                    })}
                                </span>
                            </li>
                            <li>
                                <span>优惠券</span>
                                <span style={{color:"#F88B84"}}>-￥50.00</span>
                            </li>
                            <li>
                                <span>保险费用</span>
                                <span style={{color:"#B5B5B5"}}>+￥0.00</span>
                            </li>
                            <li>
                                <span>实付款</span>
                                <span>￥{
                                        this.props.ajaxResult.map(item=>{
                                        return item.price.slice(0,item.price.length-1)-50
                                    })}
                                </span>
                            </li>
                            <li>
                                <span>入住日7天前中午12：00之前申请退款无违约金</span>
                                <span><i className="angle right icon" data-filtered="filtered" style={{color:"#B5B5B5"}}></i></span>
                            </li>
                        </ul>
                    </div>
                    <div className="mains_b">
                        <div className="mains_b_t">
                            <p>预留信息</p>
                            <p>预定人</p>
                            <p>
                                <span>手机号码</span>
                                <span>13539924625</span>
                            </p>
                        </div>
                    </div>
                    <div className="main_foot"></div>
                </div>
                <div className="payment">
                    <img src="../../../assets/quxiao.jpg" onClick={this.cancel.bind(this)}/>
                    <img src="../../../assets/zhifu.jpg"  onClick={this.payment.bind(this)}/>
                </div>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.getdetail.status,
        ajaxResult: state.getdetail.result || [],
        ajaxStatus1:state.updateType.status,
        ajaxResult1:state.updateType.result || []
    }
}

export default connect(mapStateToProps, actions)(GoodsOrderComponent);