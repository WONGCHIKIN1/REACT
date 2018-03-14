import React from 'react';
import './find.scss'
import {connect} from 'react-redux'
import * as actions from '../../../actions/landlordAction';
import {hashHistory} from 'react-router'

class Find extends React.Component{
    componentWillMount(){
        this.props.getpage()
        this.props.getlandlord();
    }
    btnClick(n){
        hashHistory.push({  
            pathname: '/sare',
            query:{
                id:n,
            },  
        })      
    }
    render(){
        return(
                <div className="find">
                    <div className="find_title">
                        <span>发现</span>
                        <div>
                            <b>探索更大的世界</b>
                            <br/>
                            <b>DISCOVERY</b>
                        </div>
                    </div>
                    <div className="rooms">
                        <span>特色房源</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/03.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            <span>特色</span>
                            公司年会，开Patty，租豪华别墅
                        </div>
                    </div>
                      {
                        this.props.ajaxResult.map(item=>{
                            if(item.id == 5){
                            return( 
                               <div className="main" key={item.id} onClick={this.btnClick.bind(this,item.id)}>
                                <ul className="pic" >
                                    <li><u>01</u><img src={item.imgurls.split(';')[0]}/></li>
                                    <li><u>02</u><img src={item.imgurls.split(';')[1]}/></li>
                                    <li><u>03</u><img src={item.imgurls.split(';')[2]}/></li>
                                </ul>
                                <h3 className="clearfix"><span>攻略</span><b>{item.title}</b></h3>
                                <p>
                                <b>2018/1/9</b>
                                <span><i className="empty heart icon"></i>{item.likes}</span>                    
                                <span><i className="talk outline icon"></i>{item.common}</span>           
                                </p>
                            </div>
                            )}
                        })
                       
                    }
                    {this.props.ajaxResult.map(item=>{
                            if(item.id == 9){
                                return (<div className="box" key={item.id} onClick={this.btnClick.bind(this,item.id)}>
                                    <img src={item.imgurls.split(';')[0]} />
                                    <div>
                                        <span>故事</span>
                                        <p>{item.title}</p>
                                        <p>
                                            <b>2018/1/9</b>
                                            <span><i className="empty heart icon"></i>{item.commons}</span>                    
                                            <span><i className="talk outline icon"></i>{item.likes}</span>           
                                        </p>
                                    </div>
                                </div>)
                            }
                        })
                    }
                    <div className="hot_search">
                        <div>
                            <p>大理</p>
                            <span>1200W搜索</span>
                        </div>
                        <div>
                            <p>丽江</p>
                            <span>780W搜索</span>
                        </div>
                        <div>
                            <p>桂林</p>
                            <span>850W搜索</span>
                        </div>
                        <div>
                            <p>凤凰</p>
                            <span>760W搜索</span>
                        </div>
                    </div>
                    {this.props.ajaxResult.map(item=>{
                            if(item.id == 10){
                                return (<div className="box" key={item.id} onClick={this.btnClick.bind(this,item.id)}>
                                    <img src={item.imgurls.split(';')[0]} />
                                    <div>
                                        <span>故事</span>
                                        <p>{item.title}</p>
                                        <p>
                                            <b>2018/1/9</b>
                                            <span><i className="empty heart icon"></i>{item.commons}</span>                    
                                            <span><i className="talk outline icon"></i>{item.likes}</span>           
                                        </p>
                                    </div>
                                </div>)
                            }
                        })
                    }
                    <div className="nav">
                        <img src="../../../../assets/j_shanghai.jpg" />
                    </div>
                    {this.props.ajaxResult1.map(item=>{
                            if(item.hid == 25){
                               return (
                                <div className="user_common" key={item.hid}>
                                    <div className="user_data" >
                                            <img src={item.head_image} />
                                            <span>康</span>
                                            <span>入住城市</span>
                                            <span>{item.city}</span>
                                    </div>
                                    <div className="user_content">
                                        <p>这里的评论的是写死的是写死的是写死的是写死的是写死的是写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的写死的死的死的死的死的死死死死死死</p>
                                        <ul>
                                            <li>
                                                <img src={item.image_src} />
                                            </li>
                                            <li>
                                                <img src={item.image_src} />
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="point_to">评论提到的房源</p>
                                    <div className="user_checkout_room">
                                        <img src={item.image_src}/>
                                        <div className="show_price">￥{item.price.slice(0,item.price.length-1)}</div>
                                        <div>
                                            <p>
                                                <span>{/*崂山区*/}</span>
                                                {item.title}
                                                <span>5.0</span>
                                            </p>
                                            <p>
                                                <span>整租-独栋别墅-宜住20人以上</span>
                                                <span>{item.city}崂山区</span>
                                                <span>{item.talk}条评价</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               )
                            }
                        })
                    }
                </div>
            )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.strategylist.status,
        ajaxResult: state.strategylist.result || [],
        ajaxStatus1: state.getpage.status,
        ajaxResult1: state.getpage.result || [],
    }
}

export default connect(mapStateToProps, actions)(Find);