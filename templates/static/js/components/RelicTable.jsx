import React, {Suspense, useMemo, useState} from 'react';
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import Rotate from 'react-reveal/Rotate';
import '../../../public/css/RelicTable.css';
import logo from '../../images/warframe_new_logo.png';
import classnames from 'classnames';

const RelicTable = (props) => {
    const DataTable = React.lazy(() => import('react-data-table-component'));
    const [activeTab, setActiveTab] = useState('sell');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const columns = useMemo(() => [
        {
            cell: (elt) => <Button color={"danger"} onClick={() => props.removeRelic(elt.name)}>Remove</Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Relic Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Order Type',
            selector: 'type',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Time',
            selector: 'time',
            sortable: true,
        },
        {
            name: 'Volume',
            selector: 'volume',
            sortable: true,
        },
        {
            name: 'Min Price',
            selector: 'min_price',
            sortable: true,
        },
        {
            name: 'Avg Price',
            selector: 'avg_price',
            sortable: true,
        },
        {
            name: 'Max Price',
            selector: 'max_price',
            sortable: true,
        },
        {
            name: 'WA Price',
            selector: 'wa_price',
            sortable: true,
        },
        {
            name: 'Median Price',
            selector: 'median_price',
            sortable: true,
        },
    ]);

    const loadingComponent = () =>
        (
            <Rotate>
                <img src={logo} alt={"Loading..."}/>
            </Rotate>
        )
    ;


    return (
        <div className="row justify-content-center mt-3">
            <div className="col col-8">
                <Suspense fallback={<div>Loading..</div>}>
                    <div>
                        {props.isLoading &&
                        <DataTable
                            progressPending={true}
                            progressComponent={loadingComponent()}
                            title="Relics"
                            columns={columns}
                            striped={true}
                            highlightOnHover={true}
                            persistTableHead={true}
                            data={props.data}
                        />
                        }
                    </div>
                    {!props.isLoading && props.data && props.data.length > 0 &&
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === 'sell'})} onClick={() => {
                                    toggle('sell');
                                }}>
                                    Sellers
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({active: activeTab === 'buy'})} onClick={() => {
                                    toggle('buy');
                                }}>
                                    Buyers
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="sell">
                                <Row>
                                    <Col sm="12">
                                        <DataTable
                                            className="cell-border"
                                            title="Relics"
                                            columns={columns}
                                            striped={true}
                                            orderMulti={true}
                                            highlightOnHover={true}
                                            persistTableHead={true}
                                            fixedheader={true}
                                            data={props.data.filter(data => data.type === "sell")}
                                        />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="buy">
                                <Row>
                                    <Col sm="12">
                                        <DataTable
                                            className="cell-border"
                                            title="Relics"
                                            columns={columns}
                                            striped={true}
                                            orderMulti={true}
                                            highlightOnHover={true}
                                            persistTableHead={true}
                                            fixedheader={true}
                                            data={props.data.filter(data => data.type === "buy")}
                                        />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                    }
                </Suspense>
            </div>
        </div>
    )
};

export default RelicTable;
