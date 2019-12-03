import React from 'react';

export const Todo = (props) => {
    
    return(
        
        <li onClick={() => props.toggleCompleteStatus(props.id)} style= {{marginTop: 5}} >

              {
                !props.checked 
                ? props.content 
                : <span style={{ cursor: "pointer" ,textDecorationLine: 'line-through' }}>{props.content} </span>
              }
            
            <button onClick = {(e)=> {e.stopPropagation(); props.removeTodo(props)}} style={{cursor: "pointer" ,marginLeft: 5, color: "white",backgroundColor: "darkgray", border: 0 , padding: 10}}>X</button>
        </li>
    )
}