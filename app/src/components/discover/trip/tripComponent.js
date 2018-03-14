import React from 'react';
import './trip.scss';
import {hashHistory} from 'react-router';

export default class TripComponent extends React.Component{
    toHotel(n){
        console.log(n);
        n=encodeURI(n);
        hashHistory.push({  
        pathname: '/searchhotel',
        query:{
            city:n
        }
        });  
    }
    render(){
        return(
            <div className="trip">
                <ul className="t_nav">
                    <li onClick={this.toHotel.bind(this,'大理')}><img src="../../../../assets/j_dali.jpg" /></li>
                    <li onClick={this.toHotel.bind(this,'成都')}><img src="../../../../assets/j_chendu.jpg" /></li>
                    <li onClick={this.toHotel.bind(this,'武汉')}><img src="../../../../assets/j_wuhan.jpg" /></li>
                    <li onClick={this.toHotel.bind(this,'厦门')}><img src="../../../../assets/j_xiamen.jpg" /></li>
                    <li onClick={this.toHotel.bind(this,'上海')}><img src="../../../../assets/j_shanghai.jpg" /></li>
                </ul>
            </div>
            )
    }
}