import React, {Component} from 'react';

class TodoItem extends Component {

    render() {

        const completedStyle ={
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        };


        return (
                <tr style={this.props.finished ? completedStyle : null}>
                    <th scope="row">{this.props.id}</th>
                    <td id="task">
                        <h6>{this.props.task}</h6>
                        <small>{this.props.description}</small>
                    </td>
                    <td>
                        <div className="progress">
                            <div id="progress" className="progress-bar progress-bar-striped progress-bar-animated progress-bar-indigo" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.props.percentage}%`}}>
                                <small>{this.props.percentage}%</small>
                            </div>
                        </div>
                    </td>
                    <td id="deadline">{new Date(this.props.deadline).toLocaleString()}</td>
                    <td>
                        <div className="justify-content-center">
                            <input id="checkbox" className="" type="checkbox" onChange={() => this.props.handleChange(this.props.id)} checked={this.props.finished}/>
                            <label for="checkbox" className="check-space"> Finished
                            </label>
                        </div>
                        <button className="btn btn-primary btn-space" type="submit" id={this.props.id} task={this.props.task} percentage={this.props.percentage} deadline ={this.props.deadline} >Edit</button>
                        <button className="btn btn-danger btn-space" type="submit">Delete</button>
                    </td>
                </tr>

        );
    }
}

export default TodoItem;
