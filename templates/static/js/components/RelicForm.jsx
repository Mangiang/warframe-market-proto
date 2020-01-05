import React, {useLayoutEffect, useState} from 'react';
import relicsStore from '../store/relicsStore';
import {Button} from 'reactstrap';
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

        const submit = () => {
            props.setLoadingState(true);
            import('axios').then(axios => {
                axios.post(`${BACKEND_URL}/getRelicsStats`, {})
                    .then(res => {
                        props.setLoadingState(false);
                        props.setRelicsStats(res.data);
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
                            suggestions={relicsState.relicsFullNameList}
                        />
                    </div>
                </div>}
                <div className="row">
                    <div className="col">
                        <Button color="primary" className="float-left" onClick={submit}>Search</Button>
                    </div>
                </div>
            </div>
        );
    }
;

export default RelicForm;