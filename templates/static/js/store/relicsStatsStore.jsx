import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    relics: [],
    isLoading: false,
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
    addRelicsList: newRelic => {
        if (!state.relics.includes((val) => newRelic === val)) {
            state = {
                ...state,
                relics: [...state.relics, newRelic],
            };
        }
        subject.next(state);
    },
    removeRelicsFromList: newRelic => {
        state = {
            ...state,
            relics: state.relics.filter((val) => newRelic !== val.name),
        };
        subject.next(state);
    },
    setLoadingState: newState => {
        state = {
            ...state,
            isLoading: newState,
        };
        subject.next(state);
    },
    initialState
};

export default relicsStatsStore;