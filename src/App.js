import React from 'react';
import './App.css';
import {AddTodo} from './AddTodo'
import {ResetAll} from './ResetAll'
import {TodoList} from './TodoList'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
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
      alert("Bu not zaten mevcut! Farklı bir not girin.")
      return false; 
    
      
    }else if(newTodo.length < 3){
      alert("Notlar en az 3 karakterden oluşmalıdır.")
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
        let currentTodo = {...todo};
        currentTodo.checked = !currentTodo.checked;
        return currentTodo;
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
      <div>
        
        
        <h1>TODO APP</h1>

        <TodoList 
                  todos = {this.state.todos}
                  removeTodo = {this.removeTodo}
                  toggleCompleteStatus = {this.toggleCompleteStatus} />
        <AddTodo todos = {this.state.todos}
                  addTodo = {this.addTodo} />

        <ResetAll resetAll = {this.resetAll}/>

        
        
        
      </div>
    );
  }
  
}

export default App;
