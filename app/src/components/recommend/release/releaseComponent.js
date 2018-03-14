import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../../../actions/releaseAction.js';

import './release.scss'
class releaseComponent extends Component{
    state = {
        room:[],
    }
    rooms(event){
        if(event.target.tagName=='INPUT'){
            this.setState({room:event.target.value})
        }
    }
    wanted(){
        var city = $('.city').val();
        var district = $('.district').val();
        var date = $('.date').val();
        if(city=='' || date=='' || district==''){
            return ($('.ui.basic.modal').modal('show'))
        }else{
           this.props.getstrategy(city,district,date,this.state.room).then(()=>{
                if(this.props.ajaxResult){
                    alert('发布成功')
                    window.location.reload();
                }else{
                    return alert('发布失败')
                }
            }) 
        }
        
    }
    render(){
        return (
            <div className="release">
                <div className="head">
                <Link to="/recommend"><i className="chevron left icon" data-filtered="filtered"></i></Link>
                </div>
                <div className="mains">
                    <div className="mains_t clearfix">
                        <Link to="release"><span>发布求租</span></Link>
                        <Link to="myRelease"><span>我的求租</span></Link>
                        <i className="file outline icon" data-filtered="filtered"></i>
                    </div>
                    <div className="mains_c">
                        <ul className="clearfix">
                            <li>
                                <span>城市</span>
                                <input type="text" placeholder="请输入城市" className="city"/>
                            </li>
                            <li>
                                <span>区域</span>
                                <input type="text" placeholder="请选择区域" className="district"/>
                            </li>
                        </ul>
                        <div className="timeout">
                            <p>入住离店日期</p>
                            <input placeholder="请输入入住和离店日期" className="date"/>
                        </div>
                    </div>
                    <div className="mains_b">
                        <p>房源户型</p>
                        <ul onClick={this.rooms.bind(this)}>
                        <li><label><input type="radio" name="room" value="1室"/>1室</label></li>
                        <li><label><input type="radio" name="room" value="2室"/>2室</label></li>
                        <li><label><input type="radio" name="room" value="3室"/>3室</label></li>
                        <li><label><input type="radio" name="room" value="4室以上"/>4室以上</label></li>
                        </ul>
                        <div className="mains_b_room">
                            <p><span>入住人数</span></p>
                            <p><span>房间套数</span></p>
                        </div>
                        <div className="mains_b_price">
                            <span>请输入您的期望价格-必填</span>
                        </div>
                    </div>
                </div>
                <div className="release1" onClick={this.wanted.bind(this)}>
                    <img src="../../../../assets/release1.png"/>
                </div>
                <div className="ui basic modal" style={{fontSize:"50px",lineHeight:"70px",textAlign:"center"}}>
                    请输入您需要求租的信息<br/>(不能为空)
                </div>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.releaseRoom.status,
        ajaxResult: state.releaseRoom.result || []
    }
}

export default connect(mapStateToProps, actions)(releaseComponent);