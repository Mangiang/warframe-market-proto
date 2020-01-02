import React, {lazy, Suspense} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faUniversity} from "@fortawesome/free-solid-svg-icons/faUniversity";

const Header = () => {
    const Jumbotron = lazy(() => import('reactstrap/lib/Jumbotron'));

    return (
        <Suspense fallback={"Loading..."}>
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-1"/>
                        <div className="col-9">
                            <h1 className="display-3">Warframe Market Proto</h1>
                            <p className="lead">Get the best relic to sell at any given time</p>
                            <hr className="my-2"/>
                            <p>⚠ Work in progress ⚠ </p>
                            <p>Had to write it right ?</p>
                            <div className="lead">
                                <a onClick={() => window.open("someLink", "_blank")}
                                   href="https://github.com/Mangiang/warframe-market-proto" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} color={"black"}/>
                                </a>
                                <a style={{color: 'black'}} onClick={() => window.open("someLink", "_blank")}
                                   href="https://warframe.market" target="_blank">
                                    <FontAwesomeIcon icon={faUniversity} color={"black"}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-1"/>
                    </div>
                </div>
            </Jumbotron>
        </Suspense>
    );
};

export default Header;