import React, {Suspense, useMemo} from 'react';
import {Button} from "reactstrap";
import Rotate from 'react-reveal/Rotate';
import '../../../public/css/RelicTable.css';

import logo from '../../images/warframe_new_logo.png';

const RelicTable = (props) => {
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

    const DataTable = React.lazy(() => import('react-data-table-component'));

    return (
        <div>
            {props.isLoading &&
            <Suspense fallback={<div>Loading..</div>}>
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
            </Suspense>
            }
            {!props.isLoading && props.data && props.data.length > 0 &&
            <Suspense fallback={<div>Loading..</div>}>
                <DataTable
                    title="Relics"
                    columns={columns}
                    striped={true}
                    highlightOnHover={true}
                    persistTableHead={true}
                    data={props.data}
                />
            </Suspense>
            }

        </div>
    )
};

export default RelicTable;