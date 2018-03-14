import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import './searchHotel.scss'
import * as actions from '../../actions/strategyAction.js';

class SearchhotelComponent extends Component{
    componentWillMount(){
        // var city=this.props.location.query.city;
        // this.props.gethotel(city)
        this.getlist();
    }
   
    componentDidMount(){
        // 拉倒底部自动加载更多
        var self=this;
        var h_main=document.getElementsByClassName('h_main')[0];
        h_main.onscroll=function(){
            if(h_main.scrollHeight-h_main.scrollTop==h_main.clientHeight){
                console.log(self.props.ajaxResult.length%10)
               if(self.props.ajaxResult.length%10==0){

                self.getlist();
               }else{
                    var end=document.getElementById('end');
                    end.style.display="block";
               }
            }
        }
    }  
    getlist(city){
        var city;
        if(city){
            city=encodeURI(city);
        }else{
         city=this.props.location.query.city;
        }
        this.props.gethotel(city)
    }
    toDetail(id){
        hashHistory.push({  
        pathname: '/detail',
        query:{
            id:id
        }
        });  
    }
    sort(){
        var h_sort=document.getElementsByClassName('h_sort');
        console.log(h_sort);
        if(h_sort[0].style.display=='block'){
            h_sort[0].style.display='none'
        }else{
            h_sort[0].style.display='block';
        }
    }
    getSort(e){
        var h_sort=document.getElementsByClassName('h_sort');
        console.log(e.target.innerText);
        if(e.target.innerText=='默认排序'){
            this.getlist();
        }
        if(e.target.innerText=='价格高到低'){
            this.props.sorthotel(this.props.location.query.city,'DESC');
        }
        if(e.target.innerText=='价格低到高'){
            this.props.sorthotel(this.props.location.query.city,'ASC');
        }
        h_sort[0].style.display='none';
    }
    render(){
       var style={display:'none'};
       var style2={display:'none'};
        var style1;
        if(this.props.ajaxStatus==0){
                style1={display:'block'}
               
        }else{
            style1={display:'none'}
           
        }      
        return (
            <div className="searchhotel">
                <header className="h_header">
                    <i className="angle left icon" onClick={()=>hashHistory.goBack()}></i>
                    <div className="search">
                        <div className="location" onClick={()=>hashHistory.push('/city')}>
                            <input type="text" placeholder={decodeURI(this.props.location.query.city)}/>
                            <i className="caret down icon"></i>
                        </div>
                        <div className="find">
                             <i className="search icon"></i>
                             <input type="text" placeholder="搜索景点/商圈/关键字"/>
                        </div>
                    </div>
                    <i className="marker icon"></i>
                </header>
                <nav className="h_nav">
                    <dl>
                        <dt>入住日期</dt>
                        <dd>选择日期</dd>
                    </dl>
                    <dl>
                        <dt>位置区域</dt>
                        <dd>选择位置</dd>
                    </dl>
                    <dl onClick={this.sort.bind(this)}>
                        <dt>推荐排序</dt>
                        <dd>默认排序</dd>
                    </dl>
                    <dl>
                        <dt>更多筛选</dt>
                        <dd>选择条件</dd>
                    </dl>
                    <ul className="h_sort" style={style} onClick={this.getSort.bind(this)}>
                            <li>默认排序</li>
                            <li>价格高到低</li>
                            <li>价格低到高</li>
                            <li>最新房源</li>
                            <li>最受欢迎</li>
                        </ul>
                </nav>
                <main className="h_main">
                    {this.props.ajaxResult.map(item=>{
                        return (
                                <div className="hcontent" key={item.hid} onClick={this.toDetail.bind(this,item.hid)}>
                                    <div className="pic">
                                        <img src={item.image_src} />
                                        <span>￥{item.price}</span>
                                        
                                    </div>
                                    <dl>
                                        <dt className="clearfix">
                                            <p>{item.title}</p><span>5.0</span>
                                        </dt>
                                        <dd className="clearfix">
                                            <p>整租-民宿-宜住8人 <b>{item.city}</b></p><span>{item.talk}条评价</span>
                                        </dd>
                                    </dl>
                                </div>
                                )
                    })}
                           
                    
                    
                    <div id="loading" style={style1}>
                        <img src='./assets/loading.gif'/>
                    </div>
                    <p style={style2} id="end">已经到最底啦</p>
                </main>
                 
            </div>
        )
    }
}

let mapStateToProps = (state) => {

        return {
            
            ajaxStatus: state.hotellist.status,
            ajaxResult: state.hotellist.result || []    
        }
    
    

}

export default connect(mapStateToProps, actions)(SearchhotelComponent);
