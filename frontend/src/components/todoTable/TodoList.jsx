import React, {Component} from 'react';
import TodoItem from './TodoItem'
import Data from '../../data'
import axios from 'axios'

class TodoList extends Component {

    constructor(){
        super();
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
    componentDidMount() {
        this.getDataFromDb();
        if(!this.state.intervalIsSet){
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({intervalIsSet: interval});
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
            .then(res => this.setState({data: res}));

        // fetch("http://localhost:3001/todos")
        //     .then(data => data.json())
        //     .then(res => this.setState({data: res.data}));
    };

    // DELETE ITEM
    deleteFromDb = idToDelete => {
      let objIdToDelete = null;
      this.state.data.forEach(dat => {
          if(dat.id === idToDelete) {
              objIdToDelete = dat._id;
          }
      });

      axios.delete(`http://localhost:3001/todos/${objIdToDelete}`);
    };

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