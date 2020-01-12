import React, {Suspense, useLayoutEffect, useMemo, useState} from 'react';
import '../../../public/css/RelicTable.css';
import relicsStatsStore from "../store/relicsStatsStore";


const RelicTable = (props) => {
    const DataTable = React.lazy(() => import('react-data-table-component'));
    const Button = React.lazy(() => import('react-bootstrap/Button'));
    const Spinner = React.lazy(() => import('react-bootstrap/Spinner'));
    const Tab = React.lazy(() => import('react-bootstrap/Tab'));
    const Tabs = React.lazy(() => import('react-bootstrap/Tabs'));
    const Container = React.lazy(() => import('react-bootstrap/Container'));
    const Row = React.lazy(() => import('react-bootstrap/Row'));
    const Col = React.lazy(() => import('react-bootstrap/Col'));

    const [relicsStats, setRelicsStats] = useState(relicsStatsStore.initialState);

    useLayoutEffect(() => {
        const relicSubscription = relicsStatsStore.subscribe(setRelicsStats);
        return () => {
            relicSubscription.unsubscribe();
        };
    }, []);

    const columns = useMemo(() => [
        {
            cell: (elt) => <Button variant={"danger"} onClick={() => props.removeRelic(elt.name)}>Remove</Button>,
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
            <Spinner animation="border"/>
        )
    ;


    return (
        <Container fluid={true}>
            <Row className="justify-content-center mt-3">
                <Col className="col-8">
                    <Suspense fallback={<div>Loading..</div>}>
                        {relicsStats.isLoading &&
                        <div>
                            <Tabs defaultActiveKey="sell" id="dataTabs" transition={false}>
                                <Tab eventKey="sell" title="Sellers">
                                    <DataTable
                                        progressPending={true}
                                        progressComponent={loadingComponent()}
                                        title="Relics"
                                        columns={columns}
                                        striped={true}
                                        highlightOnHover={true}
                                        persistTableHead={true}
                                        data={relicsStats.relics}
                                    />
                                </Tab>
                                <Tab eventKey="buy" title="Buyers">
                                </Tab>
                            </Tabs>
                        </div>
                        }
                        {!relicsStats.isLoading && relicsStats.relics && relicsStats.relics.length > 0 &&
                        <div>
                            <Tabs defaultActiveKey="sell" id="dataTabs" transition={false}>
                                <Tab eventKey="sell" title="Sellers">
                                    <DataTable
                                        className="cell-border"
                                        title="Relics"
                                        columns={columns}
                                        striped={true}
                                        orderMulti={true}
                                        highlightOnHover={true}
                                        persistTableHead={true}
                                        fixedheader={true}
                                        data={relicsStats.relics.filter(data => data.type === "sell")}
                                    />
                                </Tab>
                                <Tab eventKey="buy" title="Buyers">
                                    <DataTable
                                        className="cell-border"
                                        title="Relics"
                                        columns={columns}
                                        striped={true}
                                        orderMulti={true}
                                        highlightOnHover={true}
                                        persistTableHead={true}
                                        fixedheader={true}
                                        data={relicsStats.relics.filter(data => data.type === "buy")}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                        }
                    </Suspense>
                </Col>
            </Row>
        </Container>
    )
};

export default RelicTable;
