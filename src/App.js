import React from 'react';
import './App.css';
import AddTodo from './AddTodo'
import {ResetAll} from './ResetAll'
import {TodoList} from './TodoList'
import Filters from './Filters'
import {connect} from "react-redux";
import {setTodos, addTodo} from "./actionCreators/actionCreators"

class App extends React.Component {
  constructor(props){
    super(props);
  }

  removeTodo = (todo) => {
    const newTodos = this.state.todos.filter(item => {
      return item.content !== todo.content
    })

    this.setState({
      todos: newTodos
    }, () => {
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    })
  }

  resetAll = () => {
      this.setState({
        todos: []
      }, () => {
        window.localStorage.removeItem("todos")
      })
  }

  


  toggleCompleteStatus = (id) => {
    console.log(id);
    
    let newTodos = this.state.todos.map(todo => {
      if(id === todo.id){
        return {...todo, checked: !todo.checked}
      }else{
        return todo;
      }
    })
    this.setState({
      todos: newTodos
    }, () => {
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    })
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

    this.setState({
      todos: localTodos || []
    })
  }



  render(){
    return (
      <div className = "ToDo">
        
        
        <h1 className = "ToDo-Header">todos</h1>
        

        <Filters   />
        
        <AddTodo   />

        <ResetAll resetAll = {this.resetAll}
                  todos = {this.props.todos} />

                  
        <TodoList 
                  todos = {this.filterTodos(this.props.todos, this.props.activeFilter)}
                  removeTodo = {this.removeTodo}
                  toggleCompleteStatus = {this.toggleCompleteStatus} />


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
