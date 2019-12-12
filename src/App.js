import React from 'react';
import './App.css';
import {AddTodo} from './AddTodo'
import {ResetAll} from './ResetAll'
import {TodoList} from './TodoList'
import Filters from './Filters'
import {connect} from "react-redux";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      activeFilter: "all"
      
    }
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

  addTodo = (newTodo) => {
    
    const isThere = this.state.todos.some(item => {
      return item.content === newTodo
    })

    if(isThere){
      alert("You have already had this note.")
      return false; 
    
      
    }else if(newTodo.length < 3){
      alert("Type at least 3 digits!")
      return false; 
    
    }else{
      this.setState({
        todos: this.state.todos.concat([
          { content: newTodo, id: Math.random(), checked: false }
        ])
      }, () => {
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
      })
    }
    
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
        
        <AddTodo  todos = {this.state.todos}
                  addTodo = {this.addTodo} />

        <ResetAll resetAll = {this.resetAll}
                  todos = {this.state.todos} />

                  
        <TodoList 
                  todos = {this.filterTodos(this.state.todos, this.props.activeFilter)}
                  removeTodo = {this.removeTodo}
                  toggleCompleteStatus = {this.toggleCompleteStatus} />

        

        
      </div>
    );
  }
  
}



const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter}
}



export default connect(mapStateToProps, null) (App);
