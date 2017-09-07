/**
 * Created by zengwei on 2017/9/6
 */

import React, {Component} from 'react'
import { Tag } from 'element-react'
import Grid from '../components/Grid'
import EditButton from '../components/EditButton'
import {fetchData} from '../utils/Fetch'
import styles from '../assets/stylus/HostConfig.styl'


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
                    align: 'center',
                    filters: [{text: '家', value: '家'}, {text: '公司', value: '公司'}],
                    render: (data, column)=>{
                        // console.log(data)
                        return <EditButton name="删除"/>
                        // if(data['tag'] == '家'){
                        //     return <Tag type="primary">{data['tag']}</Tag>
                        // }else if(data['tag'] == '公司'){
                        //     return <Tag type="success">{data['tag']}</Tag>
                        // }
                    }
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
                tag: '公司'
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