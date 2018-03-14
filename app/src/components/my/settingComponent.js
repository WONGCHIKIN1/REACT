import React, {Component} from 'react'
import './settingComponent.scss'
import {Link} from 'react-router'

export default class settingComponent extends Component{
    exit(){
        sessionStorage.removeItem("username")
    }
    render(){
        return (
            <div>
                <div className="header">
                    <Link to="/my"><i className="angle left icon"></i></Link>
                    <span>设置</span>
                    <span></span>
                </div>
                <ul className="functionList">
                    <li>
                        <Link to="/changePassword">
                            <p>修改密码<i className="angle right icon"></i></p>
                            <span>修改账号密码</span>
                        </Link>
                    </li>
                    <li>
                        <p>合作账号<i className="angle right icon"></i></p>
                        <span>绑定合作账号</span>
                    </li>
                    <li>
                        <p>关于我们<i className="angle right icon"></i></p>
                        <span>民宿客栈网V5.2.6</span>
                    </li>
                    <li>
                        <p>分享软件<i className="angle right icon"></i></p>
                        <span>一间房一种生活</span>
                    </li>
                    <li>
                        <p>给我们好评<i className="angle right icon"></i></p>
                        <i className="power icon"></i><i className="power icon"></i><i className="power icon"></i><i className="power icon"></i><i className="power icon"></i><i className="power icon"></i>
                    </li>
                    <li>
                        <p>清除缓存<i className="angle right icon"></i></p>
                        <span>9.68M</span>
                    </li>
                    <Link to="/login"><input type="button" onClick={this.exit.bind(this)}className="exit" value="退出登录"/>
                    </Link> 
                </ul>
            </div>
        )
    }
}