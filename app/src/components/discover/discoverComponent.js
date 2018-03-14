import React, {Component} from 'react';
import router from 'react-router'
import StrategyComponent from './strategy/strategy.js'
import './discoverComponent.scss'
import {Link} from 'react-router'

export default class HomeComponent extends Component{
    render(){
        return (
            <div className="discover">
                <div className="n_nav">
                    <ul className="nav">
                        <li><Link to="discover/find">发现</Link></li>
                        <li><Link to="discover/landlord">房东故事</Link></li>
                        <li><Link to="discover/story">旅行故事</Link></li>
                        <li><Link to="discover/strategy">旅游攻略</Link></li>
                        <li><Link to="discover/trip">出行专题</Link></li>
                        <li><Link to="discover/hit">热门评论</Link></li>
                        
                    </ul>
                </div>
                <div className="d_main">{this.props.children}</div>
                <div className="d_footer"></div>
            </div>
        )
    }
}