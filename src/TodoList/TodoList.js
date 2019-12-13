import React from 'react';
import Todo from '../Todo/Todo';
import { Styled } from './style';




export const TodoList = (props) => {
    return(
        
        <Styled.Div>
        
            {props.todos.map(todo => {
                return <Todo {...todo}
                        key={todo.id} />
                })
            }
         
        </Styled.Div>
       
    )
}