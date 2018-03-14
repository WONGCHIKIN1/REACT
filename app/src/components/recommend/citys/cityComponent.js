import React, {Component} from 'react'
import {Link,hashHistory} from 'react-router'

import cityLists from './city.js'
import './citys.scss'

export default class cityComponent extends Component{
    state = {
        A:[],
        B:[],
        C:[],
        D:[],
        E:[],
        F:[],
        G:[],
        H:[],
        J:[],
        K:[],
        L:[],
        M:[],
        N:[],
        P:[],
        Q:[],
        R:[],
        S:[],
        T:[],
        W:[],
        X:[],
        Y:[],
        Z:[],

    }
    componentWillMount(){
        var cityList = [];
        var A = [];
        var B = [];
        var C = [];
        var D = [];
        var E = [];
        var F = [];
        var G = [];
        var H = [];
        var J = [];
        var K = [];
        var L = [];
        var M = [];
        var N = [];
        var P = [];
        var Q = [];
        var R = [];
        var S = [];
        var T = [];
        var W = [];
        var X = [];
        var Y = [];
        var Z = [];
        cityLists.map(item=>{
            cityList.push(item.pinyin+','+item.name)
        })
        cityList = cityList.sort();
        cityList.map(item=>{
            if(item.charAt(0)=='A'){
                A.push(item)
            }
            if(item.charAt(0)=='B'){
                B.push(item)
            }
            if(item.charAt(0)=='C'){
                C.push(item)
            }
            if(item.charAt(0)=='D'){
                D.push(item)
            }
            if(item.charAt(0)=='E'){
                E.push(item)
            }
            if(item.charAt(0)=='F'){
                F.push(item)
            }
            if(item.charAt(0)=='G'){
                G.push(item)
            }
            if(item.charAt(0)=='H'){
                H.push(item)
            }
            if(item.charAt(0)=='J'){
                J.push(item)
            }
            if(item.charAt(0)=='K'){
                K.push(item)
            }
            if(item.charAt(0)=='L'){
                L.push(item)
            }
            if(item.charAt(0)=='M'){
                M.push(item)
            }
            if(item.charAt(0)=='N'){
                N.push(item)
            }
            if(item.charAt(0)=='P'){
                P.push(item)
            }
            if(item.charAt(0)=='Q'){
                Q.push(item)
            }
            if(item.charAt(0)=='R'){
                R.push(item)
            }
            if(item.charAt(0)=='S'){
                S.push(item)
            }
            if(item.charAt(0)=='T'){
                T.push(item)
            }
            if(item.charAt(0)=='W'){
                W.push(item)
            }
            if(item.charAt(0)=='X'){
                X.push(item)
            }
            if(item.charAt(0)=='Y'){
                Y.push(item)
            }
            if(item.charAt(0)=='Z'){
                Z.push(item)
            }
        })
            this.setState({A:A})
            this.setState({B:B})
            this.setState({C:C})
            this.setState({D:D})
            this.setState({E:E})
            this.setState({F:F})
            this.setState({G:G})
            this.setState({H:H})
            this.setState({J:J})
            this.setState({K:K})
            this.setState({L:L})
            this.setState({M:M})
            this.setState({N:N})
            this.setState({P:P})
            this.setState({Q:Q})
            this.setState({R:R})
            this.setState({S:S})
            this.setState({T:T})
            this.setState({W:W})
            this.setState({X:X})
            this.setState({Y:Y})
            this.setState({Z:Z})
    }
    componentDidMount() {
        var self=this;
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 100 ? 'block' : 'none';
            }
        };

        // 点击跳转
        var city=document.getElementsByClassName('citys')[0];
        console.log(city);
        city.onclick=function(e){
            // console.log(e.target);
            if(e.target.parentNode.parentNode.className=='citys_c'||e.target.parentNode.className=='citylist'){
                console.log(e.target.innerText);
                
                var reg=/^[\u4e00-\u9fa5]+$/;
                if(reg.test(e.target.innerText)){
                    // 如果是汉字
                    // 跳转到列表页
                    self.toHotelList(e.target.innerText);
                }
            }
            
        }   
    }
    // 跳转到列表页
    toHotelList(city){
        city=encodeURI(city);
        hashHistory.push({  
        pathname: '/searchHotel',
        query:{
            city:city
        }
        }); 

    }

    // 返回顶部
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    city_location = e =>{
        var $citys =$('.citys')
        var $citylist =$('.citylist')
        if(e.target.tagName.toLowerCase()=="li"){
            var cityRequest=e.target.innerText;
            //距离顶部的距离
            var topDistance = $citylist.find('#'+cityRequest).offset().top;
            window.scrollTo(100,topDistance)
        }
    }
    render(){
        return (
            <div>
                <div className="citys">
                    <div className="citys_t">
                        <div className="searchNav">
                            <i className="search icon" data-filtered="filtered"></i>
                            <span onClick={()=>hashHistory.goBack()}>取消</span>
                            <input type="text" placeholder="请输入目的地城市/景点商圈"/>
                            <div id='allmap'></div>
                        </div>
                    </div>
                    <div className="citys_c">   
                        <p>热门城市</p>
                        <ul className="clearfix">
                            <li><Link to="searchhotel?city=成都">成都</Link></li>
                            <li><Link to="searchhotel?city=大理">大理</Link></li>
                            <li><Link to="searchhotel?city=武汉">武汉</Link></li>
                            <li><Link to="searchhotel?city=厦门">厦门</Link></li>
                            <li><Link to="searchhotel?city=上海">上海</Link></li>
                            <li>北京</li>
                            <li>广州</li>
                            <li>杭州</li>
                            <li>昆明</li>
                            <li>南京</li>
                            <li>秦皇岛</li>
                            <li>青岛</li>
                            <li>日照</li>
                            <li>三亚</li>
                            <li>深圳</li>
                            <li>沈阳</li>
                            <li>苏州</li>
                            <li>天津</li>
                            <li>威海</li>
                            <li>西安</li>
                            <li>烟台</li>
                            <li>长沙</li>
                            <li>郑州</li>
                            <li>重庆</li>
                        </ul>
                    </div>
                    <ul className="city_location" onTouchStart={this.city_location.bind(this)}>
                        <p>全</p>
                        <p>部</p>
                        <p>城</p>
                        <p>市</p>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>N</li>
                        <li>P</li>
                        <li>Q</li>
                        <li>R</li>
                        <li>S</li>
                        <li>T</li>
                        <li>W</li>
                        <li>X</li>
                        <li>Y</li>
                        <li>Z</li>
                    </ul>
                    <div className="citylist" ref="A">
                        <p id="A">A</p>
                        {
                            this.state.A.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="B">B</p>
                        {
                            this.state.B.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="C">C</p>
                        {
                            this.state.C.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="D">D</p>
                        {
                            this.state.D.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="E">E</p>
                        {
                            this.state.E.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="F">F</p>
                        {
                            this.state.F.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="G">G</p>
                        {
                            this.state.G.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="H">H</p>
                        {
                            this.state.H.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="J">J</p>
                        {
                            this.state.J.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="K">K</p>
                        {
                            this.state.K.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="L">L</p>
                        {
                            this.state.L.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="M">M</p>
                        {
                            this.state.M.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="N">N</p>
                        {
                            this.state.N.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="P">P</p>
                        {
                            this.state.P.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="Q">Q</p>
                        {
                            this.state.Q.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="R">R</p>
                        {
                            this.state.R.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="S">S</p>
                        {
                            this.state.S.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="T">T</p>
                        {
                            this.state.T.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="W">W</p>
                        {
                            this.state.W.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="X">X</p>
                        {
                            this.state.X.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="Y">Y</p>
                        {
                            this.state.Y.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="Z">Z</p>
                        {
                            this.state.Z.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                </div>
                <div id="top_view" onTouchStart={this.scrollToTop} className="back-top">
                    <img src="../../../../assets/fanhui.jpg"/>
                </div>
            </div>
        )
    }
}