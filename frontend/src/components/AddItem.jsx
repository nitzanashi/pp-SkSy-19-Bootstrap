import React, {Component} from 'react';
import axios from 'axios';

class AddItem extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    // on change edit state
    onChange = e => this.setState({ [e.target.name]: e.target.value });


    postItem = () => {
        axios.post("http://localhost:3001/todos/", this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="fancy-logo">ADD TODO ITEM</h1>

                    <div className="todo-list">

                        <form id="contact_form">
                            <div className="form-group">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" id="task" name={"task"} className="form-control" placeholder="Task Name" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskProgress">Progress</label>
                                <input type="number" name={"percentage"} id="percentage" className="form-control"
                                       placeholder="Task Progress" min="0" max="100" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDeadline">Deadline</label>
                                <input type="datetime-local" name={"deadline"} id="taskDeadline" className="form-control" placeholder="Task Deadline" onChange={this.onChange}/>
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary" onClick={this.postItem}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;
