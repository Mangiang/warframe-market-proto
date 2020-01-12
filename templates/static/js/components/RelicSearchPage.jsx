import React, {Suspense, useLayoutEffect, useState} from 'react';

import relicsStatsStore from "../store/relicsStatsStore";

const RelicSearchPage = () => {
    const RelicForm = React.lazy(() => import('./RelicForm'));
    const RelicTable = React.lazy(() => import('./RelicTable'));
    const SearchToast = React.lazy(() => import('./SearchToast'));

    const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);
    const [searchToasts, setSearchToasts] = useState([]);

    useLayoutEffect(() => {
        const relicSubscription = relicsStatsStore.subscribe(setRelicsStats);
        relicsStatsStore.init();
        return () => {
            relicSubscription.unsubscribe();
        };
    }, []);

    const updateRelicsStats = (newValue) => {
        if (newValue.date === 'N/A')
            setSearchToasts([...searchToasts,
                {
                    id: searchToasts.length > 0 ? Math.max(searchToasts.map(a => a.key)) + 1 : 0,
                    text: `No data for ${newValue.name}`
                }]);
        relicsStatsStore.addRelicsList(newValue);
    };
    const removeRelicsStats = (newValue) => {
        relicsStatsStore.removeRelicsFromList(newValue);
    };

    const disableInput = (diableFunction) => {
        diableFunction();
    };


    return (
        <div>
            <Suspense fallback={<div>Loading..</div>}>
                {searchToasts &&
                <SearchToast searchToasts={searchToasts} setSearchToasts={setSearchToasts}/>
                }
                <RelicForm addRelicsStats={updateRelicsStats} isLoading={relicsStats.isLoading}
                           disableInput={disableInput} data={relicsStats.relics.map(rel => rel.name)}
                           setLoadingState={relicsStatsStore.setLoadingState}/>
                <RelicTable data={relicsStats.relics} isLoading={relicsStats.isLoading}
                            removeRelic={removeRelicsStats}/>
            </Suspense>
        </div>
    )
};

export default RelicSearchPage;