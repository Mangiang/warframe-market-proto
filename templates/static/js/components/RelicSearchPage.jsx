import React, {Suspense} from 'react';

import toastStore from "../store/toastStore";
import relicsStatsStore from "../store/relicsStatsStore";

const RelicSearchPage = () => {
    const RelicForm = React.lazy(() => import('./RelicForm'));
    const RelicTable = React.lazy(() => import('./RelicTable'));
    const SearchToast = React.lazy(() => import('./SearchToast'));

    const updateRelicsStats = (newValue) => {
        console.log(newValue);
        if (newValue.date === 'N/A') {
            console.log("Adding toast");
            toastStore.addToast(`No data for ${newValue.name}`);
        }
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
                <RelicForm addRelicsStats={updateRelicsStats}/>
                <RelicTable removeRelic={removeRelicsStats}/>
            </Suspense>
            <Suspense fallback={<div/>}>
                <SearchToast/>
            </Suspense>
        </div>
    )
};

export default RelicSearchPage;