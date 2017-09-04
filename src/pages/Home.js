/**
 * Created by zengwei on 2017/9/1
 */

import React, {Component} from 'react'
import Header from '../components/Header'
import Side from '../components/Side'

export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header />
                <Side />
            </div>
        )
    }
}