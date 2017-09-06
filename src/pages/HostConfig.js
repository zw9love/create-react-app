/**
 * Created by zengwei on 2017/9/6
 */

import React, {Component} from 'react'
import Grid from '../components/Grid'
import {fetchData} from '../utils/Fetch'
import styles from '../assets/stylus/HostConfig.styl'
import cs from 'classnames/bind'

const cn = cs.bind(styles)

export default class HostConfig extends Component {

    // 构造器
    constructor(props) {
        super(props)
        this.state = {
            gridData: [],
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "主机名",
                    prop: "hostName",
                    align: 'center'
                },
                {
                    label: "IP",
                    prop: "ip",
                    align: 'center'
                },
                {
                    label: "系统类型",
                    prop: "systemType",
                    align: 'center'
                },
                {
                    label: "操作",
                    prop: "handle",
                    align: 'center'
                }
            ]
        }
    }

    // 组件加载完成事件
    componentDidMount() {
        fetchData('host/get', {}, (res) => {
            this.renderGridData(res)
        })
    }

    // 渲染表单数据
    renderGridData(data) {
        let arr = []
        data.forEach((val, index) => {
            let obj = {
                hostName:val.name,
                ip:val.ip,
                systemType:`${val.os_type}_${val.os_version}_${val.os_arch}`,
            }

            arr.push(obj)
        })
        console.log(data)

        this.setState({gridData: arr})
    }

    // 主渲染方法
    render() {
        return (
            <div>
                {/*<h1>HostConfig Page</h1>*/}
                <Grid data={this.state.gridData} columns={this.state.columns}/>
            </div>
        )
    }
}