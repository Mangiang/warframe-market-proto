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
        relicsStatsStore.setRelicsList(newValue);
    };

    const RelicForm = React.lazy(() => import('./RelicForm'));
    const RelicTable = React.lazy(() => import('./RelicTable'));

    return (
        <div>
            <Suspense fallback={<div>Loading..</div>}>
                <RelicForm setRelicsStats={updateRelicsStats}/>
                <RelicTable data={relicsStats.relics}/>
            </Suspense>
        </div>
    )
};

export default RelicSearchPage;