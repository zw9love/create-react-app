/**
 * Created by zengwei on 2017/9/5
 */

import React, {Component} from 'react'
import Header from './components/Header'
import Side from './components/Side'
import './assets/stylus/App.styl'

export default class App extends Component {

    // 构造器
    constructor(props) {
        super(props)
        this.state = {}
    }

    // 组件加载完成事件
    componentDidMount() {

    }

    // 主渲染方法
    render() {
        const {children} = this.props
        return (
            <div className='app-container'>
                <Header/>
                <Side/>
                {children}
            </div>
        )
    }

}