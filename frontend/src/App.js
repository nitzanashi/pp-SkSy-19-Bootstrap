import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.css';



import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

class App extends Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <NavBar/>
                    <Dashboard/>
                </Router>

            </div>)
    }
}

export default App;
