/**
 * Created by zengwei on 2017/9/5
 */

import React, {Component} from 'react'
import {HashRouter,BrowserRouter,Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import Home from '../pages/Home'
import store from '../store/index'

export default class Router extends Component {

    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={Home}>
                        {/*/!*默认的路由组件是<RecommendSearchTxt />*!/*/}
                        {/*<IndexRoute component={RecommendSearchTxt}/>*/}
                        {/*<Route path="/home/industry" component={IndustryNav}/>*/}
                        {/*<Route path="/home/order" component={OrderSearchTxt}/>*/}
                    </Route>
                    {/*<Route path="/show" component={Show}/>*/}
                    {/*<Route path="/recommendSearch" component={RecommendSearch}/>*/}
                    {/*<Route path="/myOrder" component={MyOrder}/>*/}
                    {/*<Route path="/orderSearch" component={OrderSearch}/>*/}
                    {/*<Route path="/myLike" component={MyLike}/>*/}
                    {/*<Route path="/myComment" component={MyComment}/>*/}
                    {/*<Route path="/sugguestion" component={Sugguestion}/>*/}
                    {/*<Route path="/loginList" component={LoginList}/>*/}
                    {/*<Route path="/phoneLogin" component={PhoneLogin}/>*/}
                    {/*<Route path="/orderShow" component={OrderShow}/>*/}
                </BrowserRouter>
            </Provider>
        )
    }
}