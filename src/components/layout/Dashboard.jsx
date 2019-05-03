import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import TodoList from "../todoTable/TodoList";
import AddItem from "../AddItem"
import EditItem from "../EditItem";
import About from "../about";

class Dashboard extends Component {
    render() {
        return (
                <switch>
                    <Route exact path="/" component={TodoList} />
                    <Route exact path="/addItem" component={AddItem}/>
                    <Route exact path="/editItem" component={EditItem}/>
                    <Route exact path="/about" component={About}/>
                </switch>
        );
    }
}

export default Dashboard;