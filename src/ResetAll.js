import React from 'react';
import {connect} from "react-redux";
import {resetTodos} from "./actionCreators/actionCreators"

const ResetAll = (props) => {
    let {resetTodos, todos} = props;
    return(
        <div >
            {
                todos.length 
                ? <button onClick={resetTodos} className = "ToDo-Add-Remove">RESET</button>
                : <button  className = "ToDo-Add-Remove-Disable" >RESET</button>
            }
            
            
            
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    resetTodos: () => {dispatch(resetTodos())}
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResetAll);