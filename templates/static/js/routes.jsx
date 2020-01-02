import React, {lazy, Suspense} from 'react';
import {hashHistory, HashRouter, Route} from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const RelicSearchPage = lazy(() => import('./components/RelicSearchPage'));

export default (
    <HashRouter history={hashHistory}>
        <div>
            <Suspense fallback={"Loading..."}>
                <Header/>
                <Route path='/' component={RelicSearchPage}/>
            </Suspense>
        </div>
    </HashRouter>
);
