import React from 'react';
import {Todo} from './Todo';

export const TodoList = (props) => {
    return(
        <div style={{marginBottom: 10}}>
            {props.todos.map(todo => {
                return <Todo {...todo}
                        key={todo.id}
                        removeTodo={props.removeTodo}
                        toggleCompleteStatus = {props.toggleCompleteStatus} />
                })
            }

        </div>
    )
}