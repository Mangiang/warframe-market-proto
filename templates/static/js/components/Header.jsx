import React from 'react';
import {Jumbotron} from 'reactstrap';
import {IconContext} from "react-icons";
import {FaGithub, FaPiggyBank} from "react-icons/fa";

const Header = () => {
    return (
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
                        <IconContext.Provider value={{color: "black", className: "global-class-name"}}>
                            <div className="lead">
                                <a onClick={() => window.open("someLink", "_blank")}
                                   href="https://github.com/Mangiang/warframe-market-proto" target="_blank">
                                    <FaGithub/>
                                </a>
                                <a style={{color: 'black'}} onClick={() => window.open("someLink", "_blank")}
                                   href="https://warframe.market" target="_blank">
                                    <FaPiggyBank/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className="col-1"/>
                </div>
            </div>
        </Jumbotron>
    );
};

export default Header;