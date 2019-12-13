import React from 'react';
import {connect} from "react-redux";
import {resetTodos} from "../actionCreators/actionCreators"
import { Styled } from './style';



const ResetAll = (props) => {
    let {resetTodos, todos} = props;
    return(
        <div >

          <Styled.Button todosLength={todos.length} notification={props.notificationVisibility} onClick={resetTodos} >RESET</Styled.Button>
        
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
      todos: state.todos,
      notificationVisibility: state.notificationVisibility,
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    resetTodos: () => {dispatch(resetTodos())}
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResetAll);