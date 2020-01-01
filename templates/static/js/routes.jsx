import React from 'react';
import {hashHistory, HashRouter, Route} from 'react-router-dom';
import RelicForm from './components/RelicForm';
import Header from "./components/Header";

// import more components
export default (
    <HashRouter history={hashHistory}>
        <div>
            <Header/>
            <Route path='/' component={RelicForm}/>
        </div>
    </HashRouter>
);