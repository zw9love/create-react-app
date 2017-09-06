/**
 * Created by zengwei on 2017/9/5
 */

import React, {Component} from 'react'
import Header from './components/Header'
import Side from './components/Side'
import styles from './assets/stylus/App.styl'
import cs from 'classnames/bind'

const cn = cs.bind(styles)

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
            <div className={cn('app-container')}>
                <Header/>
                <Side/>
                {children}
            </div>
        )
    }

}