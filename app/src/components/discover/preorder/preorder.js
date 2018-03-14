import React from 'react'
import './preorder.scss'
import baseurl from '../../../baseurl'

import {connect} from 'react-redux'
import {hashHistory,Link} from 'react-router'
import * as actions from '../../../actions/strategyAction.js';

class PreorderComponent extends React.Component{
    componentWillMount(){
        this.props.getDetail(this.props.location.query.hid)
        console.log(this.props)
    }
    confirm(hid){
        this.props.setOrder(this.props.location.query.hid).then(function(){
            if(this.props.ajaxResult1.affectedRows == 1){
                alert('预订成功')
                hashHistory.push({  
                    pathname: '/goodsorder',
                    query:{
                        hid:hid,
                        orderid:this.props.ajaxResult1.insertId
                    },  
                })      
            }
        }.bind(this))
        
    }
    render(){
        return(
                <div className="preorder">
                    <header className="pre_header">
                    <Link to={'detail?hid='+this.props.location.query.hid}>
                        <i className="angle left icon" data-filtered="filtered"></i>预订
                    </Link>
                    </header>
                    <main className="pre_main">
                        <div className="p_area clearfix">
                            <div className="p_img">
                                <img src={this.props.ajaxResult.map(item=>{
                                    return item.image_src
                                })} />
                            </div>
                            <p>{this.props.ajaxResult.map(item=>{
                                    return item.title
                                })}
                            </p>
                            <h4>宜住两人，最少入住1天</h4>
                        </div>
                        <ul className="j_massage">
                            <li>
                                <dl>
                                    <dt>2018-02-22</dt>
                                    <dd>最早入住时间14：00</dd>
                                </dl>
                                <dl>
                                    <dt>2018-02-23</dt>
                                    <dd>最晚离开时间12：00</dd>
                                </dl>
                            </li>
                            <li>
                                <i className="minus icon" data-filtered="filtered"></i>
                                <span><p>1套</p><span>房源数</span></span>
                                <i className="plus icon" data-filtered="filtered"></i>
                            </li>
                            <li>
                                <p>标准入住人数/套</p>
                                <span>2人</span>
                            </li>
                        </ul>
                        <div className="o_massage">
                            <h3>预订人信息</h3>
                            <ul>
                                <li>
                                    姓名<span>请填写</span>
                                </li>
                                <li>
                                    手机号码<span>12234325334646</span>
                                </li>
                            </ul>
                            <p>用于接收入住提醒短信和房间详细地址</p>
                        </div>
                        <div className="bx">
                            <i className="users icon" data-filtered="filtered"></i>
                            <p>添加出行意外险（免费赠送一份）</p>
                            <i className="angle right icon" data-filtered="filtered"></i>                           
                        </div>
                        <div className="ui checkbox">
                          <input type="checkbox"  className="hidden"/>
                          <label>我同意<a>房东交易规则</a></label>
                        </div>
                    </main>
                    <footer className="pre_footer">
                        <p>实付款：￥{this.props.ajaxResult.map(item=>{
                                    return item.price.slice(0,item.price.length-1)
                                })}.00
                        </p>
                        {
                            this.props.ajaxResult.map(item => {
                                return <botton key={item.hid} onClick={this.confirm.bind(this,item.hid)}>立即预订</botton>
                            })
                        }
                    </footer>
                </div>
            )
    }
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {
        ajaxStatus: state.getdetail.status,
        ajaxResult: state.getdetail.result || [],
        ajaxStatus1:state.setOrder.status,
        ajaxResult1:state.setOrder.result || []
    }
}

export default connect(mapStateToProps, actions)(PreorderComponent);