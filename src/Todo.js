import React from 'react';
import {connect} from "react-redux";
import {removeTodo} from "./actionCreators/actionCreators"

const Todo = (props) => {
    
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => {dispatch(removeTodo(todo))}
})

export default connect(mapStateToProps, mapDispatchToProps) (Todo);