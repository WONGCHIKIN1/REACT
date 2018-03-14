import React, {Component} from 'react'
import redux,{createStore} from 'redux'
import * as actions from '../../actions/loginAction'
import counterReducer from '../../reducer/loginReducer.js'
import './loginComponent.scss'
import {Link} from 'react-router'
import http from 'superagent'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

class loginComponent extends Component{
    login(){
        var value = (this.refs.zhanghao).value
        this.props.loginAction({username:(this.refs.zhanghao).value,password:(this.refs.mima).value}).then(res =>{
            if(res == true){
                alert('登陆成功')
                hashHistory.push({
                    pathname:'/my',
                    query:{name:(this.refs.zhanghao).value}
                })
                 sessionStorage.setItem("username", value)
            }else{
                alert('帐号没注册或者密码错误');
            }
        });  
    }
    render(){
       return(
            <div>
                <div className="header1">
                    <i className="angle left icon"></i>
                    <span>登录</span>
                </div>
                <div className="login">
                    <div className="new">
                        <p>账户</p>
                        <input type="text"  ref="zhanghao"  placeholder="请输入帐号"/>
                    </div>
                    <div className="new new1">
                        <p>密码</p>
                        <input type="password" ref="mima" placeholder="请输入密码"/>
                    </div>
                    <input type="button" className="save" value="登录" onClick={this.login.bind(this)}/>
                    <Link to="register"><p className="link">还没有账号？</p></Link>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        loading:state.loginreducer.loading,
        result:state.loginreducer.result,
        error:state.loginreducer.error 
    }
}

export default connect(mapStateToProps,actions)(loginComponent)