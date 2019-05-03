import  {ADD_TODO, REMOVE_TODO, TOGOLE_TODO, SET_VISIBILITY_FILTER} from "./actionsTypes";

let TodoId = 2;

export const addTodo = text => ({
    type: ADD_TODO,
    id: TodoId++,
    text
});

export const deleteTodo = id => ({
    type: REMOVE_TODO,
    id: id
});

export  const toogleTodo = id => ({
   type: TOGOLE_TODO,
   id: id
});

export  const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});