import React from 'react';
import './hit.scss'

import {connect} from 'react-redux'
import {hashHistory,Link} from 'react-router'
import * as actions from '../../../actions/strategyAction.js';

class HitComponent extends React.Component{
    componentWillMount(){
        this.props.getCommon()
    }
    checkroom(hid){
        hashHistory.push({  
            pathname: '/detail',
            query:{
                id:hid,
            }
        })    
    }
    render(){
        return(
                <div>
                    <ul className="hit_content">
                        {this.props.ajaxResult.map(item=>{
                            return(
                                <li key={item.com_id}>
                                    <div>
                                        <img src={item.head_image} />
                                        <b>用户名</b>
                                        <b>入住城市<i>{item.city}</i></b>
                                        <span onClick={this.checkroom.bind(this,item.hid)}>查看房源</span> 
                                    </div>
                                    <p>{item.common}</p>
                                    <span>展开评论</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.getCommon.status,
        ajaxResult: state.getCommon.result || [],
        // ajaxStatus1:state.updateType.status,
        // ajaxResult1:state.updateType.result || []
    }
}

export default connect(mapStateToProps, actions)(HitComponent);