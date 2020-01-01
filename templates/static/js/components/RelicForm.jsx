import React, {useLayoutEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';
import relicsStore from '../store/relicsStore';
import relicsFormStore from '../store/relicsFormStore';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import 'react-tabs/style/react-tabs.css';
import "../../../public/css/relicForm.module.css"

const RelicForm = (props) => {
        const [relicsFormState, setRelicsFormState] = useState(relicsFormStore.initialState);
        const [relicsState, setRelicsState] = useState(relicsStore.initialState);

        useLayoutEffect(() => {
            console.log(BACKEND_URL);
            relicsFormStore.subscribe(setRelicsFormState);
            relicsFormStore.init();
            relicsStore.subscribe(setRelicsState);
            relicsStore.init();
            axios.get(`${BACKEND_URL}/getRefinementList`)
                .then(res => {
                    relicsStore.setRefinementList(res.data);
                });

            axios.get(`${BACKEND_URL}/getRelicsList`)
                .then(res => {
                    relicsStore.setRelicsTypesList(res.data);
                });
        }, []);

        const handleCheckboxChange = (event, isrefinement) => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            if (isrefinement) {
                if (value)
                    relicsFormStore.addRefinementList(name);
                else
                    relicsFormStore.removeRefinementList(name);
            } else {
                if (value)
                    relicsFormStore.addRelicsTypesList(name);
                else
                    relicsFormStore.removeRelicsTypesList(name);
            }
        };

        const checkRelics = (name) => {
            return relicsFormState.relicsTypesList.indexOf(name) !== -1;
        };

        const submit = () => {
            axios.post(`${BACKEND_URL}/getRelicsStats`, {
                refinement: relicsFormState.refinementList,
                relic_name: relicsFormState.relicsTypesList
            })
                .then(res => {
                    props.setRelicsStats(res.data);
                })
                .catch(err => {
                    console.log(err);
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
                                            <Input name={refin} value="refin" type="checkbox"
                                                   onChange={(event) => handleCheckboxChange(event, true)}/>{' '}
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
                                                                   onChange={(event) => handleCheckboxChange(event, false)}/>{' '}
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
        )
            ;
    }
;

export default RelicForm;