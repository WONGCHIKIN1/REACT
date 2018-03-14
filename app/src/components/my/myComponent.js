import React, {Component} from 'react'
import './myComponet.scss'
import {Router, hashHistory,Link} from 'react-router'


export default class HomeComponent extends Component{
    render(){
        return (
            <div>
                <div className="header">
                    <span><Link to="/setting"><i className="setting icon"></i>设置</Link></span>
                    <span><i className="comment outline icon"></i></span>
                </div>
                <div className="header_b">
                    <Link to="/login"><p className="usermessage">{sessionStorage.getItem("username") || '未登录'}</p>
                    查看并编辑个人资料</Link>
                </div>
                <ul className="function">
                    <li>
                        <i className="registered icon"></i>
                        <p>我的评价</p>
                        <span>写感受享红包</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>芝麻信用</p>
                        <span>600分免押入住</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>优惠券</p>
                        <span>可低现金呢</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>意见反馈</p>
                        <span>您的问题与建议</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>开具发票</p>
                        <span>商务出行必备</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>成为房东</p>
                        <span>能交朋友还赚钱</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>金卡会员</p>
                        <span>金卡尊享折扣</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>租比</p>
                        <span>租比充值</span>
                    </li>
                    <li>
                        <i className="registered icon"></i>
                        <p>我们的故事</p>
                        <span>分享故事赢租比</span>
                    </li>
                </ul>
                <p>客服电话:400-056-0055</p>
             </div>
        )
    }
}

