import {SET_FILTER, RESET_TODOS, SET_TODOS, ADD_TODO, REMOVE_TODO } from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function resetTodos(){
    return {type: RESET_TODOS}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(todo){
    return {type: REMOVE_TODO, todo}
}