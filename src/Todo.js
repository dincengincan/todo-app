import React from 'react';

export const Todo = (props) => {
    
    return(
    
            <div className="ToDoItem" onClick={() => props.toggleCompleteStatus(props.id)} >

                  {
                    !props.checked 
                    ? <div className = "ToDoItem-Text">{props.content}</div> 
                    : <div className = "ToDoItem-Text-Done">{props.content}</div> 
                  }

                  <button className="ToDoItem-Delete" onClick = {(e)=> {e.stopPropagation(); props.removeTodo(props)}} >X</button>
                
            </div>
        
    )
}