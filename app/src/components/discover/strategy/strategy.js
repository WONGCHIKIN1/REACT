import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import './strategy.scss'
import {connect} from 'react-redux'
import * as actions from '../../../actions/strategyAction.js';

class StrategyComponent extends Component{
    componentWillMount(){
        this.props.getstrategy()
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
        var style;
        if(this.props.ajaxStatus==0){
            style={display:'block'}
        }else{
            style={display:'none'}
        }
        return (
            <div>
                <div className="bloading" style={style}>
                    <img src="./assets/bigloading.gif"/>
                </div>
                <div>{
                    this.props.ajaxResult.map(items=>{
                        return (<div className="main" key={items.id} onClick={this.btnClick.bind(this,items.id)}>
                                <ul className="pic" >
                                <li><u>01</u><img src={items.imgurls.split(';')[0]}/></li>
                                <li><u>02</u><img src={items.imgurls.split(';')[1]}/></li>
                                <li><u>03</u><img src={items.imgurls.split(';')[2]}/></li>
                            </ul>
                            <h3 className="clearfix"><span>攻略</span><b>{items.title}</b></h3>
                            <p>
                            <b>2018/1/9</b>
                            <span><i className="empty heart icon"></i>{items.likes}</span>                    
                            <span><i className="talk outline icon"></i>{items.common}</span>           
                            </p>
                        </div>)
                    })
                }</div>
                 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.strategylist,111)
    return {
        ajaxStatus: state.strategylist.status,
        ajaxResult: state.strategylist.result || []
    }
}

export default connect(mapStateToProps, actions)(StrategyComponent);