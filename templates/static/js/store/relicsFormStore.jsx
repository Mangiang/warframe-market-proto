import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    refinementList: [],
    relicsTypesList: []
};
let state = initialState;

const relicsFormStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    unsubscribe: () => subject.unsubscribe(),
    addRefinementList: newRefin => {
        state = {
            ...state,
            refinementList: [...state.refinementList, newRefin],
        };
        subject.next(state);
    },
    removeRefinementList: newRefin => {
        state = {
            ...state,
            refinementList: state.refinementList.filter(refin => newRefin === refin),
        };
        subject.next(state);
    },
    addRelicsTypesList: newRelic => {
        state = {
            ...state,
            relicsTypesList: [...state.relicsTypesList, newRelic],
        };
        subject.next(state);
    },
    removeRelicsTypesList: newRelic => {
        state = {
            ...state,
            relicsTypesList: state.refinementList.filter(relic => newRelic === relic),
        };
        subject.next(state);
    },
    initialState
};

export default relicsFormStore;