import React, {Component} from 'react';

class AddItem extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="fancy-logo">ADD TODO ITEM</h1>

                    <div className="todo-list">

                        <form id="contact_form">
                            <div className="form-group">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" id="taskName" className="form-control" placeholder="Task Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskName">Task Description</label>
                                <input type="text" id="taskDescription" className="form-control" placeholder="Task Description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskProgress">Progress</label>
                                <input type="number" id="taskProgress" className="form-control"
                                       placeholder="Task Progress" min="0" max="100"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDeadline">Deadline</label>
                                <input type="datetime-local" id="taskDeadline" className="form-control" placeholder="Task Deadline" />
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;