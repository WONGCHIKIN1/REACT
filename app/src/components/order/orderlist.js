import React, {Component} from 'react'
import './ordlist.scss'
import {connect} from 'react-redux'
import * as actions from '../../actions/strategyAction.js';


class OrdlistComponent extends Component{
    componentWillMount(){
        // console.log(this.props.api);
        this.props.getorder(1);
    }
    render(){
        var style={display:'none'};
        var style1={display:'block'}
        return (
            <div>
                <div className="order_bg" style={style}>
                        <div>
                            <img src="../../../assets/order_bg_logo.jpg" />
                            <p>暂无进行中订单</p>
                        </div>
                </div>
               
                <div className="underway" style={style1}>
                    {this.props.ajaxResult.map(item=>{
                        if(item.type==1||item.type==0){
                            console.log(11);
                            return(
                                <dl className="orderlist" key={item.id}>
                        <dt>                        
                                <p>{item.title}</p>
                                <span>{item.decoration}</span>
                        </dt>
                        <dd>
                            <div>
                                <img src={item.image_src}/>
                            </div>
                            <div className="o_content">
                                <p><span>2018-03-01</span>至<span>2018-03-02</span></p>
                                <p><span>一套一晚</span><i className="angle right icon"></i></p>
                                <p>订单总额：￥<span>{item.price}</span></p>
                            </div>
                        </dd>
                    </dl>
                                )
                        }
                    })}
                </div>
                <div className="over" style={style}>
                    {this.props.ajaxResult.map(item=>{
                        if(item.type==2||item.type==3){
                            return(
                                <dl className="orderlist" key={item.id}>
                        <dt>                        
                                <p>{item.title}</p>
                                <span>{item.decoration}</span>
                        </dt>
                        <dd>
                            <div>
                                <img src={item.image_src}/>
                            </div>
                            <div className="o_content">
                                <p><span>2018-03-01</span>至<span>2018-03-02</span></p>
                                <p><span>一套一晚</span><i className="angle right icon"></i></p>
                                <p>订单总额：￥<span>{item.price}</span></p>
                            </div>
                        </dd>
                    </dl>
                                )
                        }
                    })}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.orderlist);
        return {
            
            ajaxStatus: state.orderlist.status,
            ajaxResult: state.orderlist.result || []    
        }
    
    

}

export default connect(mapStateToProps, actions)(OrdlistComponent);