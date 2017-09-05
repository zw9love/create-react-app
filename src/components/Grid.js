/**
 * Created by zengwei on 2017/9/5
 */

import React, {Component} from 'react'
import { Table } from 'element-react'

export default class Grid extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Table
                style={{width: '100%'}}
                columns={this.props.columns}
                // maxHeight={200}
                data={this.props.data}
                stripe={true}
                border={true}
            />
        )
    }
}