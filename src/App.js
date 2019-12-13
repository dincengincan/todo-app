import React from 'react';
import './App.css';
import { Styled } from './style';
import AddTodo from './AddTodo/AddTodo'
import ResetAll from './ResetAll/ResetAll'
import {TodoList} from './TodoList/TodoList'
import Filters from './Filters/Filters'
import {connect} from "react-redux";
import {setTodos} from "./actionCreators/actionCreators"
import {CSSTransitionGroup } from 'react-transition-group';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  filterTodos = (todos, filterType) => {
    if(filterType === "all"){
        return todos;
    }else if (filterType === "completed"){
        return todos.filter((todo) => todo.checked);
    }else{
        return todos.filter((todo) => !todo.checked);
    }
  }


  componentDidMount() {
    let localTodos = window.localStorage.getItem("todos")
    if(localTodos){
      localTodos = JSON.parse(localTodos);
    }

    this.props.addTodos(localTodos || []);
  }

  //if there is change, this will update the localStorage
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps.todos) !== JSON.stringify(this.props.todos)){
      window.localStorage.setItem("todos", JSON.stringify(this.props.todos))
    }
  }


  render(){
    return (
      
      <Styled.TodoWrapper>
        <Styled.H1>todos</Styled.H1>
        
        <Filters   />
        
        <AddTodo   />

        <ResetAll  />
        
        <TodoList todos = {this.filterTodos(this.props.todos, this.props.activeFilter)}
        />

        <CSSTransitionGroup 
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={700}
         >
            {
              this.props.notificationVisibility && <Styled.H3 >{this.props.notificationMessage}</Styled.H3>
            }
        </CSSTransitionGroup>
      
      </Styled.TodoWrapper>
      
      
    );
  }
  
}



const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter,
    todos: state.todos,
    notificationVisibility: state.notificationVisibility,
    notificationMessage: state.notificationMessage
  }
};

const mapDispatchToProps = dispatch => ({
  addTodos: (todos) => {dispatch(setTodos(todos))},
})



export default connect(mapStateToProps, mapDispatchToProps) (App);
