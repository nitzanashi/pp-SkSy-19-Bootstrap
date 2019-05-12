import React, {Component} from 'react';
import TodoItem from './TodoItem'
import Data from '../../data'
import axios from 'axios'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: Data,
            data: [],
            id: 0,
            intervalIsSet: false,
            idToDelete: null,
            objectToUpdate: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    // Pooling for the Information
    componentDidMount() {
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb,
                1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // kill process
    componentWillUnmount() {
        if(this.state.intervalIsSet){
            clearInterval(this.state.intervalIsSet);
            this.setState({intevalIsSet: null});
        }
    }

    // GET ALL THE DATA
    getDataFromDb = () => {
        axios.get("http://localhost:3001/todos")
            .then(res => {
                this.setState({data: res.data});
            });
    };



    handleChange(id) {
        this.setState(prevState => {
            const updateTodos = prevState.data.map( item => {
                if(item.id === id) {
                    item.finished = !item.finished;
                }
                axios.put(`http://localhost:3001/todos/${id}`, {finished: item.finished})
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                return item;
            });
            return {
                data: updateTodos
            }
        })
    }


    render() {

        const { data } = this.state;
        // console.log(data);
        const TodoItems = data.map(
            item =>(
               <TodoItem key={item.id} id={item.id} task={item.task} percentage={item.percentage} deadline={item.deadline} finished={item.finished} description={item.description} handleChange={this.handleChange}/>
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
