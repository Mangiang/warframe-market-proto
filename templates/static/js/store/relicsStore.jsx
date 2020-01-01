import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    refinementList: [],
    relicsTypesList: []
};
let state = initialState;

const relicsStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    setRefinementList: newList => {
        state = {
            ...state,
            refinementList: newList,
        };
        subject.next(state);
    },
    setRelicsTypesList: newList => {
        state = {
            ...state,
            relicsTypesList: newList,
        };
        subject.next(state);
    },
    initialState
};

export default relicsStore;