import React from 'react';
import './App.css';
import AddTodo from './AddTodo'
import ResetAll from './ResetAll'
import {TodoList} from './TodoList'
import Filters from './Filters'
import {connect} from "react-redux";
import {setTodos, addTodo} from "./actionCreators/actionCreators"

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
      <div className = "ToDo">
        <h1 className = "ToDo-Header">todos</h1>
        
        <Filters   />
        
        <AddTodo   />

        <ResetAll  />
       
        <TodoList todos = {this.filterTodos(this.props.todos, this.props.activeFilter)}
        />


      </div>
    );
  }
  
}



const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter,
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => ({
  addTodos: (todos) => {dispatch(setTodos(todos))},
})



export default connect(mapStateToProps, mapDispatchToProps) (App);
