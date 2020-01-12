import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    toasts: [],
};
let state = initialState;

const toastStore = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    unsubscribe: () => subject.unsubscribe(),
    addToast: text => {
        if (!state)
            state = {};
        const id = state && state.toasts.length > 0 ? Math.max(state.toasts.map(a => a.id)) + 1 : 0;

        state = {
            ...state,
            toasts: [...state.toasts, {id, text}],
        };
        subject.next(state);
    },
    removeToast: idx => {
        state = {
            ...state,
            toasts: state.toasts.filter(elt => elt.id !== idx),
        };
        subject.next(state);
    },
    initialState
};

export default toastStore;