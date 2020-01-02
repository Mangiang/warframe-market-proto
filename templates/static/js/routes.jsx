import React from 'react';
import {hashHistory, HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import RelicSearchPage from './components/RelicSearchPage';

//const RelicSearchPage = lazy(() => import('./components/RelicSearchPage'));

// import more components
export default (
    //<Suspense fallback={<div>Loading...</div>}>
    <HashRouter history={hashHistory}>
        <div>
            <Header/>
            <Route path='/' component={RelicSearchPage}/>
        </div>
    </HashRouter>
    //</Suspense>
);
