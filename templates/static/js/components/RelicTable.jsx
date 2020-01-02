import React, {Suspense} from 'react';

const RelicTable = (props) => {
    const columns = [
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
    ];

    const data = props.data;

    const DataTable = React.lazy(() => import('react-data-table-component'));

    return (
        <div>
            <Suspense fallback={<div>Loading..</div>}>
                <DataTable
                    title="Relics"
                    columns={columns}
                    striped={true}
                    data={data}
                />
            </Suspense>
        </div>
    )
};

export default RelicTable;