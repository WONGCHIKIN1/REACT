import React, {Component} from 'react'
import './order.scss'
import OrdlistComponent from './orderlist.js'

export default class HomeComponent extends Component{
    componentDidMount(){
        var tag=document.getElementById('tag');
        var li=tag.children;
        console.log(li);
        tag.onclick=function(e){
            
            if(e.target.tagName=='SPAN'){
                for(let i=0;i<li.length;i++){
                    $(li[i]).removeClass('active');
                }
                e.target.parentNode.className='active';
            }
        }
    }
    change(p){
        var underway=document.getElementsByClassName('underway')[0];
        var over=document.getElementsByClassName('over')[0]
        if(p=='underway'){
            underway.style.display='block';
            over.style.display='none';
        }
        if(p=='over'){
            over.style.display='block';
            underway.style.display='none';
        }
    }
    render(){
    
        return (
            <div className="order">
                <p>订单</p>
                <ul id="tag">
                    <li className="active"><span onClick={this.change.bind(this,'underway')}>进行中</span></li>
                    <li><span onClick={this.change.bind(this,'over')}>已结束</span></li>
                </ul>
                <div className="ord">

                    
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}