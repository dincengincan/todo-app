import React from 'react';
import './App.css';

export class AddTodo extends React.Component {
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

  onAddTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
        this.setState({
            input: ""
        })
  }


  
  render(){
    let placeholder = "What needs to be done?"
    if(this.props.todos.length){
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