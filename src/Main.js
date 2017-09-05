/**
 * Created by zengwei on 2017/9/1.
 */
//Main.js
import React from 'react';
import {render} from 'react-dom';
import './assets/css/Global.styl'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Router from './router/Router'

render(<Router />, document.getElementById('root'));