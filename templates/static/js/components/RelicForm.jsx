import React, {useLayoutEffect, useState} from 'react';
import relicsStore from '../store/relicsStore';
import Autocomplete from "./Autocomplete";

import 'react-tabs/style/react-tabs.css';
import "../../../public/css/relicForm.module.css"

const RelicForm = (props) => {

        const [relicsState, setRelicsState] = useState(relicsStore.initialState);

        useLayoutEffect(() => {
            const storeSubscription = relicsStore.subscribe(setRelicsState);
            relicsStore.init();

            import('axios').then(axios => {
                axios.get(`${BACKEND_URL}/getRelicsFullNameList`)
                    .then(res => {
                        relicsStore.setRelicsFullNameList(res.data.sort());
                    });
            });


            return () => {
                storeSubscription.unsubscribe();
            };
        }, []);

        const submit = (value) => {
            props.setLoadingState(true);
            import('axios').then(axios => {
                axios.post(`${BACKEND_URL}/getRelicsStats`, {value})
                    .then(res => {
                        props.setLoadingState(false);
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
                            disable={props.isLoading}
                            exclude={props.data}
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