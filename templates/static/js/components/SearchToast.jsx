import React, {useLayoutEffect, useState} from 'react';

import '../../../public/css/Toasts.css'

import logo from '../../images/warframe_new_logo.png';
import toastStore from "../store/toastStore";

const SearchToast = () => {
    const Toast = React.lazy(() => import('react-bootstrap/Toast'));
    const ToastHeader = React.lazy(() => import('react-bootstrap/ToastHeader'));
    const ToastBody = React.lazy(() => import('react-bootstrap/ToastBody'));
    const [searchToasts, setSearchToasts] = useState(toastStore.initialState);

    useLayoutEffect(() => {
        const toastSubscription = toastStore.subscribe(setSearchToasts);
        toastStore.init();
        return () => {
            toastSubscription.unsubscribe();
        };
    }, []);

    const onClose = (key) => {
        toastStore.removeToast(key);
    };

    const shouldShow = (key) => {
        console.log(key);
        console.log(searchToasts);
        return searchToasts.toasts.some(elt => elt.id === key)
    };

    return (
        <div className={"toast-container"}>
            {searchToasts && searchToasts.toasts.map(toast => (
                <Toast key={toast.id} className={"toast-item"} onClose={() => onClose(toast.id)}
                       show={shouldShow(toast.id)} delay={3000} autohide>
                    <ToastHeader className={"toast-header"}>
                        <img src={logo} className={"toast-image"} alt=""/>
                        <strong className="mr-auto">Warframer market proto</strong>
                        <small>just now</small>
                    </ToastHeader>
                    <ToastBody>{toast.text}</ToastBody>
                </Toast>
            ))}
        </div>
    );
};

export default SearchToast;