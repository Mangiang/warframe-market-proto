import React, {Suspense, useLayoutEffect, useState} from 'react';

import relicsStatsStore from "../store/relicsStatsStore";
import toastStore from "../store/ToastStore";

const RelicSearchPage = () => {
    const RelicForm = React.lazy(() => import('./RelicForm'));
    const RelicTable = React.lazy(() => import('./RelicTable'));
    const SearchToast = React.lazy(() => import('./SearchToast'));

    const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);

    useLayoutEffect(() => {
        const relicSubscription = relicsStatsStore.subscribe(setRelicsStats);
        relicsStatsStore.init();
        return () => {
            relicSubscription.unsubscribe();
        };
    }, []);

    const updateRelicsStats = (newValue) => {
        if (newValue.date === 'N/A')
            toastStore.addToast(`No data for ${newValue.name}`);

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
                <RelicForm addRelicsStats={updateRelicsStats} isLoading={relicsStats.isLoading}
                           disableInput={disableInput} data={relicsStats.relics.map(rel => rel.name)}
                           setLoadingState={relicsStatsStore.setLoadingState}/>
                <RelicTable data={relicsStats.relics} isLoading={relicsStats.isLoading}
                            removeRelic={removeRelicsStats}/>
            </Suspense>
            <Suspense fallback={<div/>}>
                <SearchToast/>
            </Suspense>
        </div>
    )
};

export default RelicSearchPage;