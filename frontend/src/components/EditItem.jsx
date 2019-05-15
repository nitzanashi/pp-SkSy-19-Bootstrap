import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class EditItem extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getDataFromDb(this.props.match.params.id)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    // POST TO SERVER
    putData = () => {
        axios.put(`http://localhost:3001/todos/${this.state.id}`, this.state)
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    // GET DATA
    getDataFromDb = (id) => {
        axios.get(`http://localhost:3001/todos/${id}`)
            .then(res => {
                this.setState( res.data[0]);
            });
    };

    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="fancy-logo">EDIT TODO ITEM</h1>

                    <div className="todo-list">

                        <form id="contact_form">
                            <div className="form-group">
                                <label htmlFor="disabledInput" className="control-label">#</label>
                                <input className="form-control" id="disabledInput" type="text" value={this.props.match.params.id} disabled/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" name={"task"} id="taskName" className="form-control"  Value={this.state.task} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskProgress">Progress</label>
                                <input type="number" name={"percentage"} id="taskProgress" className="form-control" value={this.state.percentage} onChange={this.onChange}
                                       min="0"
                                       max="100"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDeadline">Deadline</label>
                                <input type="datetime-local" name={"deadline"} id="taskDeadline" className="form-control" value={this.state.deadline} onChange={this.onChange}
                                />
                            </div>
                            <Link to={`../`} params={this.props}>
                                <input type="submit" value="Submit"  onClick={this.putData} className="btn btn-primary"/>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;
