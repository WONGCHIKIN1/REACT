import React, {Component} from 'react'
import {Link} from 'react-router'
import * as actions from '../../../actions/myreleaseAction.js';
import {connect} from 'react-redux'
import './myrelease.scss'

class MyReleaseComponent extends Component{
    componentWillMount(){
        this.props.getstrategy()
    }
    deleteRelease(event){
        if(event.target.tagName.toLowerCase()=='i'){
            var releaseId= event.target.closest('div').className;
            this.props.deleteRelease(releaseId).then(()=>{
                this.props.getstrategy()
            }) 
        }
    }
    render(){
        return(
            <div className="release">
                <div className="head">
                <Link to="/recommend"><i className="chevron left icon" data-filtered="filtered"></i></Link>
                </div>
                <div className="mains">
                    <div className="mains_t clearfix">
                        <Link to="release"><span>发布求租</span></Link>
                        <Link to="myRelease"><span>我的求租</span></Link>
                        <i className="file outline icon" data-filtered="filtered"></i>
                    </div>
                    <div className="myrelease">
                        {
                            this.props.ajaxResult.map((item,idx)=>{
                                return (
                                    <div key={idx} className={item.id} onClick={this.deleteRelease.bind(this)}>
                                        <ul>
                                            <p>信息{idx+1}</p>
                                            <li>
                                                <span><b>城市</b>：{item.city}</span>
                                                <span><b>区域</b>：{item.district}</span>
                                            </li>
                                            <li><b>时间</b>：{item.times}</li>
                                            <li><b>房源户型</b>：{item.house_type}</li>
                                            <i className="remove icon" data-filtered="filtered"></i>
                                        </ul>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.myreleaseRoom.status,
        ajaxResult: state.myreleaseRoom.result || [],
        ajaxStatus1: state.deleteRelease.status,
        ajaxResult1: state.deleteRelease.result || []
    }
}

export default connect(mapStateToProps, actions)(MyReleaseComponent);