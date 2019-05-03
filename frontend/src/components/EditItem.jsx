import React, {Component} from 'react';
import data from '../data'

class EditItem extends Component {

    render() {
        const demoData = data[1];
        console.log(demoData);
        return (
            <div className="container">
                <div>
                    <h1 className="fancy-logo">EDIT TODO ITEM</h1>

                    <div className="todo-list">

                        <form id="contact_form">
                            <div className="form-group">
                                <label htmlFor="disabledInput" className="control-label">#</label>
                                <input className="form-control" id="disabledInput" type="text" value={demoData.id} disabled/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" id="taskName" className="form-control"
                                       value={demoData.task}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskProgress">Progress</label>
                                <input type="number" id="taskProgress" className="form-control" value={demoData.percentage} min="0"
                                       max="100"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDeadline">Deadline</label>
                                <input type="datetime-local" id="taskDeadline" className="form-control"
                                       value={demoData.deadline}/>
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;