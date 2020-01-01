import React, {useLayoutEffect, useState} from 'react';

import RelicForm from './RelicForm';
import RelicTable from "./RelicTable";
import relicsStatsStore from "../store/relicsStatsStore";

const RelicSearchPage = () => {
    const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);

    useLayoutEffect(() => {
        relicsStatsStore.subscribe(setRelicsStats);
        relicsStatsStore.init();
    }, []);

    const updateRelicsStats = (newValue) => {
        relicsStatsStore.setRelicsList(newValue);
    };

    return (
        <div>
            <RelicForm setRelicsStats={updateRelicsStats}/>
            <RelicTable data={relicsStats.relics}/>
        </div>
    )
};

export default RelicSearchPage;