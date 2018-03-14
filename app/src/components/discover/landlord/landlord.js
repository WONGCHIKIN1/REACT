import React from 'react';
import './landlord.scss'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../../../actions/landlordAction';
import {hashHistory} from 'react-router'

class Landlord extends React.Component{
    componentWillMount(){
        this.props.getlandlord()
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
                <div className="landlord">
                   {this.props.ajaxResult.map(item=>{
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
        ajaxResult: state.strategylist.result || []
    }
}

export default connect(mapStateToProps, actions)(Landlord);