import {SET_FILTER, RESET_TODOS, SET_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE_STATUS} from "../actions/actions"

const rootReducer = function (state ={
    activeFilter: "all",
    todos: []
}, action) {
    switch (action.type) {
       
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter}
        
        case SET_TODOS:
            return {...state, todos: action.todos}
        
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        
        case REMOVE_TODO:
            const newTodos = state.todos.filter(item => {
               return item.content !== action.todo.content
             })
            return {...state, todos: newTodos }
        
        case TOGGLE_COMPLETE_STATUS:
            let newStatusTodos = state.todos.map(todo => {
                if(action.id === todo.id){
                  return {...todo, checked: !todo.checked}
                }else{
                  return todo;
                }
              })
            return {...state, todos: newStatusTodos}

         case RESET_TODOS:
            return {...state, todos: []}
        default:
            return state;
    }
}




export default rootReducer