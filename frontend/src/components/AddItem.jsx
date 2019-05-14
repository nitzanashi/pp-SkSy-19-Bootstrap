import React, {Component} from 'react';

class AddItem extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getDataFromDb(this.props.match.params.id)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    postData = () => {
        axios.post(`http://localhost:3000/todos/`, this.state)
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
                                <input type="text" name={"task"} id="task" className="form-control" Value={this.state.task} onChange={this.onChange} placeholder="Task Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskName">Task Description</label>
                                <input type="text" id="taskDescription" className="form-control" placeholder="Task Description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskProgress">Progress</label>
                                <input type="number" name={"percentage"} id="taskProgress" className="form-control" value={this.state.percentage} onChange={this.onChange}
                                       placeholder="Task Progress" min="0" max="100"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDeadline">Deadline</label>
                                <input type="datetime-local" name={"deadline"} id="taskDeadline" className="form-control" placeholder="Task Deadline" value={this.state.deadline} onChange={this.onChange} />
                            </div>

                            <Link to={`../`} params={this.props}>
                                <input type="submit" value="Submit" onClick={this.postData} className="btn btn-primary"/>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;
