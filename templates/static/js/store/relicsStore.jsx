import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    refinementList: [],
    relicsFullNameList: [],
    relicsTypesList: []
};
let state = initialState;

const relicsStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    unsubscribe: () => subject.unsubscribe(),
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
    setRelicsFullNameList: newList => {
        state = {
            ...state,
            relicsFullNameList: newList,
        };
        subject.next(state);
    },
    initialState
};

export default relicsStore;