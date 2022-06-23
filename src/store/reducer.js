import { SET_TODO_INPUT, SET_TODO_ADD, SET_TODO_DELETE } from "./constant"

const storageTodos = JSON.parse(localStorage.getItem('Todos'));

const initState = {
    todos: storageTodos ?? [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case SET_TODO_ADD:
            const newTodos = [...state.todos, action.payload]
            localStorage.setItem('Todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos
            }
        case SET_TODO_DELETE:
            const newTodos2 = [...state.todos];
            newTodos2.splice(action.payload, 1);
            localStorage.setItem('Todos', JSON.stringify(newTodos2));
            return {
                ...state,
                todos: newTodos2
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer