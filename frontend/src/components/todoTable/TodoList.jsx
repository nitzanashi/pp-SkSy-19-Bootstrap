import React, {Component} from 'react';
import TodoItem from './TodoItem'
import Data from '../../data'

class TodoList extends Component {

    constructor(){
        super();
        this.state = {
            todos: Data
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState =>{
            const updateTodos = prevState.todos.map( item => {
                if(item.id === id) {
                    item.finished =! item.finished
                }
                return item;
            });
            return {
                todos: updateTodos
            }
        })
    }


    render() {

        const TodoItems = this.state.todos.map(
            item =>(
                <TodoItem id={item.id} task={item.task} percentage={item.percentage} deadline={item.deadline} finished={item.finished} description={item.description} handleChange={this.handleChange}/>
            )
        );

        return (
            <div className="container">
                <h1 className="fancy-logo">a TODO-list</h1>
                <div className="todo-list">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                            {TodoItems}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TodoList;