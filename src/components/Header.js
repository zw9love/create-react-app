/**
 * Created by zengwei on 2017/9/1
 */

import React, {Component} from 'react'
import styles from '../assets/stylus/Header.styl'
import cs from 'classnames/bind'
import { success } from "../utils/Swal";

let cn = cs.bind(styles)

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    quit(){
        success('','测试下。。。')
    }

    render() {
        return (
            <header className={cn('header')}>
                <div className={cn('left_header')}>
                    <img src={require('../assets/img/logo.png')} alt=""/>
                    <h3>蜂眼主机计算环境安全监控平台</h3>
                </div>
                <div className={cn('right_header')}>
                    <ul>
                        <li title="权限">
                            <span>超级管理员</span>
                        </li>
                        <li title="全局设置">
                            <i className='fa fa-cogs' aria-hidden="true"/>
                        </li>
                        <li title="全屏">
                            <i className='fa fa-arrows-alt' aria-hidden="true"/>
                        </li>
                        <li title="退出" onClick={this.quit}>
                            <i className='fa fa-sign-out' aria-hidden="true"/>
                        </li>
                    </ul>
                </div>
            </header>

        )
    }
}