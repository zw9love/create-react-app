// /**
//  * Created by zengwei on 2017/9/5
//  */
//
import React, {Component} from 'react'
import {HashRouter, BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import store from '../store/index'
import App from '../App'
import Home from '../pages/Home'
import HostConfig from '../pages/HostConfig'

// import createBrowserHistory from 'history/createBrowserHistory';
// const hashHistory = createBrowserHistory()

export default class MyRouter extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <App>
                        <Switch>
                            <Route exact path="/"  component={Home}/>
                            <Route path="/hostConfig"  component={HostConfig}/>
                        </Switch>
                    </App>
                </Router>
            </Provider>
        )
    }
}