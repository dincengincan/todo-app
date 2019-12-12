import {SET_FILTER, RESET_TODOS, SET_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE_STATUS, HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function resetTodos(){
    return (dispatch) => {
        dispatch({type: RESET_TODOS});
        dispatch(showNotification(`All notes were removed!`))
    }
}

export function addTodo(todo){
    return (dispatch, getState) => {
        const state = getState();
        const isThere = state.todos.some(item => {
            return item.content === todo.content
          })
        
        if(!todo.content) {
            dispatch(showNotification(`Type something`))
        }else if(isThere){
            dispatch(showNotification(`You have already added "${todo.content}"!`))
        }else{
            dispatch({type: ADD_TODO, todo});
            dispatch(showNotification(`"${todo.content}" was added!`))
        }
        
    }
}

export function removeTodo(todo){
    return (dispatch) => {
        dispatch({type: REMOVE_TODO, todo});
        dispatch(showNotification(`"${todo.content}" was removed!`))
    }
}


export function toggleCompleteStatus(id){
    return {type: TOGGLE_COMPLETE_STATUS, id}
}

export function showNotification(text){
    return (dispatch) => {
        dispatch({type: SHOW_NOTIFICATION, text});
        setTimeout(() => {
            dispatch(hideNotification());
        }, 2000)
    }
}

export function hideNotification() {
    return {type: HIDE_NOTIFICATION}
}