import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    relics: []
};
let state = initialState;

const relicsStatsStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    unsubscribe: () => subject.unsubscribe(),
    setRelicsList: newList => {
        state = {
            ...state,
            relics: newList,
        };
        subject.next(state);
    },
    initialState
};

export default relicsStatsStore;