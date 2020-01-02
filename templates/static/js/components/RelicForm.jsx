import React, {useLayoutEffect, useState} from 'react';
import relicsStore from '../store/relicsStore';
import relicsFormStore from '../store/relicsFormStore';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import 'react-tabs/style/react-tabs.css';
import "../../../public/css/relicForm.module.css"

const RelicForm = (props) => {

        const [relicsFormState, setRelicsFormState] = useState(relicsFormStore.initialState);
        const [relicsState, setRelicsState] = useState(relicsStore.initialState);


        useLayoutEffect(() => {
            const formSubscription = relicsFormStore.subscribe(setRelicsFormState);
            relicsFormStore.init();
            const storeSubscription = relicsStore.subscribe(setRelicsState);
            relicsStore.init();

            import('axios').then(axios => {
                axios.get(`${BACKEND_URL}/getRefinementList`)
                    .then(res => {
                        relicsStore.setRefinementList(res.data);
                    });

                axios.get(`${BACKEND_URL}/getRelicsList`)
                    .then(res => {
                        relicsStore.setRelicsTypesList(res.data);
                    });
            });
            return () => {
                formSubscription.unsubscribe();
                storeSubscription.unsubscribe();
            };
        }, []);

        const updateRelicsFormList = (name, list, addCallback, removeCallback) => {
            const idx = list.indexOf(name);
            if (idx < 0)
                addCallback(name);
            else
                removeCallback(name);
        };

        const handleCheckboxChange = (event, isrefinement) => {
            const target = event.target;
            const name = target.name;

            if (isrefinement) {
                updateRelicsFormList(name, relicsFormState.refinementList, relicsFormStore.addRefinementList, relicsFormStore.removeRefinementList);
            } else {
                updateRelicsFormList(name, relicsFormState.relicsTypesList, relicsFormStore.addRelicsTypesList, relicsFormStore.removeRelicsTypesList);
            }
            
        };

        const checkRefinement = (name) => {
            console.log(relicsFormState.refinementList.indexOf(name) !== -1);
            return relicsFormState.refinementList.indexOf(name) !== -1;
        };
        const checkRelics = (name) => {
            return relicsFormState.relicsTypesList.indexOf(name) !== -1;
        };


        const submit = () => {
            props.setLoadingState(true);
            import('axios').then(axios => {
                axios.post(`${BACKEND_URL}/getRelicsStats`, {
                    refinement: relicsFormState.refinementList,
                    relic_name: relicsFormState.relicsTypesList
                })
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
                <Form>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6">
                            <fieldset className="borderForm">
                                <legend className="legend">Refinement</legend>
                                {relicsState.refinementList.map(refin => (
                                    <FormGroup key={refin} check>
                                        <Label check>
                                            <Input name={refin} value={refin} type="checkbox"
                                                   defaultChecked={checkRefinement(refin)}
                                                   onChange={(event) => handleCheckboxChange(event, true)}/>
                                            {' '}
                                            {refin}
                                        </Label>
                                    </FormGroup>
                                ))}
                            </fieldset>
                        </div>
                        {relicsState.relicsTypesList.length > 0 &&
                        <div className="col-6">
                            <fieldset className="borderForm float-right">
                                <legend className="legend">Relics</legend>
                                <Tabs defaultIndex={0}>
                                    <TabList>
                                        {relicsState.relicsTypesList.map(relic => (
                                            <Tab key={`tab_${relic.era}`}>{relic.era}</Tab>
                                        ))}
                                    </TabList>

                                    {relicsState.relicsTypesList.map(relic => (
                                        <TabPanel key={`tabpanel_${relic.era}`} className="items">
                                            {
                                                relic.names.sort().map(relicName => (
                                                    <FormGroup key={`${relic.era}_${relicName}`} check
                                                               className="item">
                                                        <Label check>
                                                            <Input value={`${relic.era}_${relicName}`}
                                                                   name={`${relic.era}_${relicName}`}
                                                                   defaultChecked={checkRelics(`${relic.era}_${relicName}`)}
                                                                   type="checkbox"
                                                                   onChange={(event) => handleCheckboxChange(event, false)}/>
                                                            {' '}
                                                            {relicName}
                                                        </Label>
                                                    </FormGroup>
                                                ))
                                            }
                                        </TabPanel>
                                    ))}
                                </Tabs>
                            </fieldset>
                        </div>
                        }
                    </div>
                </Form>
                <div className="row">
                    <div className="col">
                        <Button color="primary" className="float-right" onClick={submit}>Search</Button>
                    </div>
                </div>
            </div>
        );
    }
;

export default RelicForm;