import React, {Component} from 'react'
import redux,{createStore} from 'redux'
import * as actions from '../../actions/registerAction.js'
import './registerComponent.scss'
import {Link} from 'react-router'
import http from 'superagent'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'



class registerComponent extends Component{
    register(){
        this.props.registerAction({username:(this.refs.zhucezhanghao).value,password:(this.refs.zhucemima).value}).then(res =>{
            if(res == true){
                alert('注册成功');
                hashHistory.push({
                    pathname:'/login'
                })
            }else{
                alert('账号已被注册');
            }
        });  
    }
    render(){
        return(
            <div>
                <div className="header1">
                    <Link to="/login"><i className="angle left icon"></i></Link>
                    <span>注册</span>
                </div>
                <div className="register">
                    <div className="new">
                        <p>注册账户</p>
                        <input type="text" ref="zhucezhanghao"placeholder="请输入注册帐号"/>
                    </div>
                    <div className="new new1">
                        <p>注册密码</p>
                        <input type="password" ref="zhucemima" placeholder="请输入注册密码"/>
                    </div>
                    <input type="text" onClick={this.register.bind(this)} className="save" value="注册"/>
                </div>
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        loading:state.registerreducer.loading,
        result:state.registerreducer.result,
        error:state.registerreducer.error 
    }
}

export default connect(mapStateToProps,actions)(registerComponent)
