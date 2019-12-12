import React from 'react';
import {connect} from "react-redux";
import {toggleCompleteStatus, removeTodo} from "./actionCreators/actionCreators"

const Todo = (props) => {
    
    return(
    
            <div className="ToDoItem" onClick={() => props.toggleCompleteStatus(props.id)} >

                  {
                    props.checked 
                    ? <div className = "ToDoItem-Text-Done">{props.content}</div> 
                    : <div className = "ToDoItem-Text">{props.content}</div> 
                  }

                  {
                    props.notificationVisibility
                    ? <button style={{boxShadow: "none"}} className="ToDoItem-Delete" onClick = {(e)=> {e.stopPropagation()}} >X</button>
                    : <button className="ToDoItem-Delete" onClick = {(e)=> {e.stopPropagation(); props.removeTodo(props)}} >X</button>
                  }
                  
                
            </div>
        
    )
}


const mapStateToProps = state => {
  return {
    notificationVisibility: state.notificationVisibility,
  }
};


const mapDispatchToProps = dispatch => ({
  toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))},
  removeTodo: (todo) => {dispatch(removeTodo(todo))}
})

export default connect(mapStateToProps, mapDispatchToProps) (Todo);