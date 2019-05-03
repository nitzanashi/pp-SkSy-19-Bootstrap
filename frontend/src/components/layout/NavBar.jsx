import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-indigo fixed-top" role="navigation">
                    <NavLink exact to={'/'} className="navbar-brand">TODO APP</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to={'/'} className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/addItem'} className="nav-link" activeClassName="active">Add TODO Item</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/editItem'} className="nav-link" activeClassName="active">Edit TODO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} className="nav-link" activeClassName="active">About & Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;