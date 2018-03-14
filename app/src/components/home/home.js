import React, {Component} from 'react'
import './home.scss'

export default class HomeComponent extends Component{
    render(){
        return (
            <div>
                <div className="container">{this.props.children}</div>
                <div className="navgation">
                    <ul>
                        <a href="#/recommend" >
                            <i className="home icon" data-filtered="filtered"></i>
                            <li>推荐</li>
                        </a>
                        <a href="#/discover/find">
                            <i className="search icon" data-filtered="filtered"></i>
                            <li>发现</li>
                        </a>
                        <a href="#/order/orderlist">
                            <i className="file outline icon" data-filtered="filtered"></i>
                            <li>订单</li>
                        </a>
                        <a href="#/my">
                            <i className="user icon" data-filtered="filtered"></i>
                            <li>我的</li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }

}