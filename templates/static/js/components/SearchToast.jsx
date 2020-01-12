import React, {lazy, Suspense, useState} from 'react';

import '../../../public/css/Toasts.css'

import logo from '../../images/warframe_new_logo.png';

const SearchToast = (props) => {
    const Toast = React.lazy(() => import('react-bootstrap/Toast'));
    const ToastHeader = React.lazy(() => import('react-bootstrap/ToastHeader'));
    const ToastBody = React.lazy(() => import('react-bootstrap/ToastBody'));

    const onClose = (key) => {
        props.setSearchToasts(
            props.searchToasts.filter(elt => elt.key !== key)
        );
    };

    const shouldShow = (key) => {
        return props.searchToasts.find(elt => elt.key === key)
    };

    return (
        <div className={"toast-container"}>
            {props.searchToasts && props.searchToasts.map(toast => (
                <Toast key={toast.key} className={"toast-item"} onClose={() => onClose(toast.key)}
                       show={() => shouldShow(toast.key)} delay={3000} autohide>
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