import React, {Suspense, useLayoutEffect, useState} from 'react';

import relicsStatsStore from "../store/relicsStatsStore";

const RelicSearchPage = () => {
    const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);

    useLayoutEffect(() => {
        const relicSubscription = relicsStatsStore.subscribe(setRelicsStats);
        relicsStatsStore.init();
        return () => {
            relicSubscription.unsubscribe();
        };
    }, []);

    const updateRelicsStats = (newValue) => {
        relicsStatsStore.addRelicsList(newValue);
    };
     const removeRelicsStats = (newValue) => {
        relicsStatsStore.removeRelicsFromList(newValue);
    };

    const disableInput = (diableFunction) => {
      diableFunction();
    };

    const RelicForm = React.lazy(() => import('./RelicForm'));
    const RelicTable = React.lazy(() => import('./RelicTable'));

    return (
        <div>
            <Suspense fallback={<div>Loading..</div>}>
                <RelicForm addRelicsStats={updateRelicsStats} isLoading={relicsStats.isLoading} disableInput={disableInput} data={relicsStats.relics.map(rel => rel.name)} setLoadingState={relicsStatsStore.setLoadingState}/>
                <RelicTable data={relicsStats.relics} isLoading={relicsStats.isLoading} removeRelic={removeRelicsStats}/>
            </Suspense>
        </div>
    )
};

export default RelicSearchPage;