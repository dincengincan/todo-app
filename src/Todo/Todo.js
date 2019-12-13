import React from 'react';
import {connect} from "react-redux";
import {toggleCompleteStatus, removeTodo} from "../actionCreators/actionCreators";
import {Styled} from './style'





const Todo = (props) => {
    
    return(
            
            <Styled.TodoItem onClick={() => props.toggleCompleteStatus(props.id)} >
                  
                  <Styled.Todo checked={props.checked}>{props.content}</Styled.Todo> 
                  
                {
                  props.notificationVisibility
                  ? <Styled.Button notification={props.notificationVisibility} onClick = {(e)=> {e.stopPropagation()}} >X</Styled.Button>
                  : <Styled.Button notification={props.notificationVisibility} onClick = {(e)=> {e.stopPropagation(); props.removeTodo(props)}} >X</Styled.Button>
                }
                  
            </Styled.TodoItem>
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