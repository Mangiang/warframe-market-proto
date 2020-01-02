import React, {Suspense, useEffect, useRef, useState} from 'react';
import {Progress} from "reactstrap";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, []);
};
const RelicTable = (props) => {
    const [progressState, setProgressState] = useState({done: 0, total: 0});
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

    const DataTable = React.lazy(() => import('react-data-table-component'));

    useInterval(() => {
        import('axios').then(axios => {
            axios.get(`${BACKEND_URL}/getRelicsProgression`)
                .then(res => {
                    setProgressState({done: res.data['request_done'], total: res.data['request_total']});
                });
        });
    }, props.isLoading ? 1000 : null);

    return (
        <div>
            {props.isLoading &&
            <Progress animated
                      value={progressState.done} max={progressState.total}>{`${progressState.done}/${progressState.total}`}</Progress>
            }
            {!props.isLoading && props.data && props.data.length > 0 &&
            <Suspense fallback={<div>Loading..</div>}>
                <DataTable
                    title="Relics"
                    columns={columns}
                    striped={true}
                    data={props.data}
                />
            </Suspense>
            }

        </div>
    )
};

export default RelicTable;