import {ADD_TODO, REMOVE_TODO, TOGOLE_TODO} from "../actions/actionsTypes";


const INITIAL_DATA = [];

const TodoReducer = (state = INITIAL_DATA, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                id: action.id,
                text: action.text,
                completed: false,
                }
            ];

        case TOGOLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )

        case REMOVE_TODO:
            const numIndex = parseInt(action.id)
            return this.state.filter(todo => todo.id !== numIndex)

        default:
            return state;
    }
};

export  default  TodoReducer