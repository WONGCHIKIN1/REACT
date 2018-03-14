import React, {Component} from 'react'
import {Link} from 'react-router'
import './recommend.scss'

export default class HomeComponent extends Component{
    componentDidMount(){
        var $searchNav = $('.searchNav')
        window.onscroll = function(){
             //获取滚动条滚动的距离
            const windowInnerHeight = $(document).scrollTop();
            if(windowInnerHeight>127){
                $searchNav.stop().show().animate({
                    top:0,
                },300);

            }
            if(windowInnerHeight<127){
                $searchNav.stop().animate({
                    top:'-1.093333rem',
                },300);
            }
        }
    }  
    render(){
        return (
            <div className="recommend">
                <div className="searchNav">
                    <Link to="/city">
                        <i className="search icon" data-filtered="filtered"></i>
                        <span>您要入住的城市或目的地</span>
                    </Link>
                </div>
                <div className="head">
                    <Link to="/city">
                        <div className="where_to_go">
                            想去哪?
                            <span>您要入住的城市或目的地</span>
                            <div className="searchs">
                                <i className="search icon" data-filtered="filtered"></i>
                                搜索目的地
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mains">
                    <div className="rooms">
                        <span>一间房一种生活</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line"></div>
                    </div>
                    <div className="rooms">
                        <span>全国396个城市可预订</span>
                        <div className="photos">
                            <ul>
                                <li><Link to="discover/strategy"><img src="../../../assets/02.jpg"/></Link></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <ul className="citys">
                            <li><a>上海</a></li>
                            <li><a>北京</a></li>
                            <li><a>成都</a></li>
                            <li><a>重庆</a></li>
                            <li><a>三亚</a></li>
                            <li><a>广州</a></li>
                            <li><a>杭州</a></li>
                            <li><a>苏州</a></li>
                            <li><a>武汉</a></li>
                            <li><a className="pitch_on">更多</a></li>
                        </ul>
                        <div className="parting_line">
                            全国396个城市300,000套房源等你来往
                        </div>
                    </div>
                    <div className="rooms">
                        <span>特色房源</span>
                        <div className="photos">
                            <ul>
                            <li><Link to="discover/trip"><img src="../../../assets/03.jpg"/></Link></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            公司年会，开Patty，租豪华别墅
                        </div>
                    </div>
                    <div className="rooms">
                        <span>房东故事</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/04.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            东北房东遇到上海房东
                        </div>
                        <div className="credit">
                            <div className="credit_t">
                                <ul>
                                    <li>
                                        <img src="../../../assets/credit1.jpg"/>
                                        <p>芝麻信用</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/credit2.jpg"/>
                                        <p>住宿险</p>
                                    </li>
                                    <li>
                                        <img src="../../../assets/credit3.jpg"/>
                                        <p>甜橙信用</p>
                                    </li>
                                </ul>
                                <p>温馨提示:在线订房资金安全有保障,保险报价护航</p>
                            </div>
                        </div>
                    </div>
                    <div className="rooms">
                        <span>旅行故事</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/05.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            南方人的北京卤煮初体验
                        </div>
                    </div>
                    <div className="rooms strategy">
                        <span>旅行攻略</span>
                            <ul>
                                <li><img src="../../../assets/strategy1.jpg"/></li>
                                <li><img src="../../../assets/strategy2.jpg"/></li>
                            </ul>
                            <ul>
                                <li><img src="../../../assets/strategy3.jpg"/></li>
                                <li><img src="../../../assets/strategy4.jpg"/></li>
                            </ul>
                    </div>
                    <div className="parting_b">
                        <Link to="/release"><img src="../../../assets/release.jpg"/></Link>
                    </div>
                </div>
                <div className="foots"></div>
            </div>
        )
    }
}