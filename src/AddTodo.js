import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {addTodo} from "./actionCreators/actionCreators"



class AddTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
      e.preventDefault();
      const newValue = e.target.value;
      this.setState({
          input: newValue
      });
  }

  // Firstly, takes input and pass it to addTodo function to update the state.
  // Secondly, reset the input field.
  onAddTodo = (e) => {
    e.preventDefault();
    this.addTodo(this.state.input);
        this.setState({
            input: ""
        })
  }

  // Takes the new input as newTodo, adds newTodo to redux state with given properties
  addTodo = (newTodo) => {
    this.props.addTodo({
      content: newTodo, id: Math.random(), checked:false
    })

  }
  
  render(){
    let placeholder = "What needs to be done?"
    if(this.props.todos.length > 0){
      placeholder = ""
    }
    return (
      
      <form onSubmit={this.onAddTodo} >                              
        
        <input  type="text" placeholder= {placeholder} value={this.state.input} onChange={this.handleChange} />
        
        <button className = "ToDo-Add-Remove">ADD</button>
        
      </form>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => {dispatch(addTodo(todo))}
})

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);