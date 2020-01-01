import React from 'react';
import {hashHistory, HashRouter, Route} from 'react-router-dom';
import Header from "./components/Header";
import RelicSearchPage from "./components/RelicSearchPage";

// import more components
export default (
    <HashRouter history={hashHistory}>
        <div>
            <Header/>
            <Route path='/' component={RelicSearchPage}/>
        </div>
    </HashRouter>
);