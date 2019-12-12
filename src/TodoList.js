import React from 'react';
import Todo from './Todo';
import './App.css';



export const TodoList = (props) => {
    return(
        <div className= "ToDo-Container">
            {props.todos.map(todo => {
                return <Todo {...todo}
                        key={todo.id}
                        toggleCompleteStatus = {props.toggleCompleteStatus} />
                })
            }

        </div>
    )
}