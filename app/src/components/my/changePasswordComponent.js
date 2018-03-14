import React, {Component} from 'react'
import redux,{createStore} from 'redux'
import * as actions from '../../actions/changeAction.js'
import './changePasswordComponent.scss'
import {Link} from 'react-router'
import http from 'superagent'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'


class changePasswordComponent extends Component{
    change(){
        this.props.changeAction({username:(this.refs.zhanghao).value,password:(this.refs.mima).value}).then(res =>{
            console.log(res)
            if(res == true){
                alert('修改密码成功');
                sessionStorage.removeItem("username")
                hashHistory.push({
                    pathname:'/login',
                })
            }else{
                alert('输入的帐号还没注册');
            }
        });  
    }
    render(){
        return(
            <div>
                <div className="header">
                    <Link to="/setting"><i className="angle left icon"></i></Link>
                    <span>修改密码</span>
                    <span></span>
                </div>
                <div className="new">
                    <p>修改账号</p>
                    <input type="text" ref="zhanghao" placeholder="请输入修改账号"/>
                </div>
                <div className="new new1">
                    <p>修改密码</p>
                    <input type="password" placeholder="请再次输入新密码" ref="mima"/>
                </div>
                <input type="button" onClick={this.change.bind(this)} className="save" value="保存"/>   
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        loading:state.changereducer.loading,
        result:state.changereducer.result,
        error:state.changereducer.error 
    }
}

export default connect(mapStateToProps,actions)(changePasswordComponent)