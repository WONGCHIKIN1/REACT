import React from 'react'
import {Route,Redirect,IndexRoute} from 'react-router'
// import {Icon} from 'antd'
// import 'antd/dist/antd.css';
import HomeComponent from '../components/home/home'
import recommendComponent from '../components/recommend/recommendComponent'
import cityComponent from '../components/recommend/citys/cityComponent'
import discoverComponent from '../components/discover/discoverComponent'
import myComponent from '../components/my/myComponent'
import orderComponent from '../components/order/orderComponent.js'

import goodsOrderComponent from '../components/order/goodsOrderComponent'


import settingComponent from '../components/my/settingComponent.js'
import changePasswordComponent from '../components/my/changePasswordComponent.js'
import registerComponent from '../components/my/registerComponent.js'
import loginComponent from '../components/my/loginComponent.js'

import StrategyComponent from '../components/discover/strategy/strategy.js'
import TripComponent from '../components/discover/trip/tripComponent.js'
import HitComponent from '../components/discover/hitcommon/hitComponent.js'
import PreorderComponent from '../components/discover/preorder/preorder.js'
import FindComponent from '../components/discover/find/find'
import LandlordComponent from '../components/discover/landlord/landlord'
import storyComponent from '../components/discover/story/story'
import releaseComponent from '../components/recommend/release/releaseComponent'
import SearchHotel from '../components/searchHotel/searchHotel.js'
import SareComponent from '../components/discover/sare/sare.js'


import myReleaseComponent from '../components/recommend/release/myReleaseComponent'
import DetailComponent from '../components/detail/detail'
import orderlist from '../components/order/orderlist.js'



const routes = (
    <Route path="/" component={HomeComponent}>
        <Route path="recommend" component={recommendComponent}/>
        <Route path="city" component={cityComponent}/>
        <Route path="discover" component={discoverComponent}>
            <Route path="strategy" component={StrategyComponent}/>
            <Route path="trip" component={TripComponent}/>
            <Route path="hit" component={HitComponent}/>
            <Route path="find" component={FindComponent}/>
            <Route path="landlord" component={LandlordComponent}/>
            <Route path="story" component={storyComponent}/>
        </Route>
        <Route path="my" component={myComponent}/>
        <Route path="order" component={orderComponent}>
               <Route path="orderlist" component={orderlist}/>
        </Route>
        <Route path="goodsorder" component={goodsOrderComponent}/>

        <Route path="setting" component={settingComponent}/>
        <Route path="register" component={registerComponent}/>
        <Route path="login" component={loginComponent}/>
        <Route path="changePassword" component={changePasswordComponent}/>

        <Route path="preorder" component={PreorderComponent}/>
        <Route path="release" component={releaseComponent}/>

        <Route path="sare" component={SareComponent}/>
        <Route path="searchhotel" component={SearchHotel}/>
        <Route path="myRelease" component={myReleaseComponent}/>
        <Route path="detail" component={DetailComponent}/>

    </Route>
)

export default routes;