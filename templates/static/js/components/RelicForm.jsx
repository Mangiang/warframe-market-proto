import React, {useLayoutEffect, useState} from 'react';
import relicsStore from '../store/relicsStore';
import relicsStatsStore from '../store/relicsStatsStore';
import Autocomplete from "./Autocomplete";

import 'react-tabs/style/react-tabs.css';
import "../../../public/css/relicForm.module.css"

const RelicForm = (props) => {

        const [relicsState, setRelicsState] = useState(relicsStore.initialState);
        const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);


        useLayoutEffect(() => {
            const storeSubscription = relicsStore.subscribe(setRelicsState);
            const statsSubscription = relicsStatsStore.subscribe(setRelicsStats);
            relicsStore.init();
            relicsStatsStore.init();

            import('axios').then(axios => {
                axios.get(`${BACKEND_URL}/getRelicsFullNameList`)
                    .then(res => {
                        relicsStore.setRelicsFullNameList(res.data.sort());
                    });
            });


            return () => {
                storeSubscription.unsubscribe();
                statsSubscription.unsubscribe();
            };
        }, []);

        const submit = (value) => {
            relicsStatsStore.setLoadingState(true);
            import('axios').then(axios => {
                axios.post(`${BACKEND_URL}/getRelicsStats`, {value})
                    .then(res => {
                        relicsStatsStore.setLoadingState(false);
                        props.addRelicsStats(res.data);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            });
        };
        return (
            <div className="container">
                {relicsState.relicsFullNameList.length > 0 &&
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <Autocomplete
                            disable={relicsStats.isLoading}
                            exclude={relicsStats.relics}
                            onSubmit={submit}
                            suggestions={relicsState.relicsFullNameList}
                        />
                    </div>
                </div>}
            </div>
        );
    }
;

export default RelicForm;