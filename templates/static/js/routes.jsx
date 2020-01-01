import React from 'react';
import {hashHistory, HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
// import more components
export default (
    <HashRouter history={hashHistory}>
        <div>
            <Route path='/' component={Home}/>
        </div>
    </HashRouter>
);