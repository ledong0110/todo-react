import { SET_TODO_INPUT, SET_TODO_ADD, SET_TODO_DELETE } from "./constant"

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const setTodoAdd = payload => ({
    type: SET_TODO_ADD,
    payload
})

export const setTodoDelete = payload => ({
    type: SET_TODO_DELETE,
    payload
})