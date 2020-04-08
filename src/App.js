import React, { Component } from 'react';
import TodoForm from './views/todoForm';
import TodoList from './views/todoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'TODO List',
      newTodo: '',
      todos: [
        { title: 'Learn React', done: false },
        { title: 'Learn JSX', done: false },
      ],
    };
  }

  allDone() {
    const todos = this.state.todos.map((todo) => {
      return {
        title: todo.title,
        done: true,
      };
    });
    this.setState({ todos });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index], done: event.target.checked };
    this.setState({ todos });
  }

  removeTodo(event, index) {
    event.preventDefault();
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value,
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false,
        },
      ],
    });
  }

  render() {
    return (
      <div className="App w-50 mx-auto">
        <TodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />

        <div className="list w-50% mx-auto">
          <button
            className="btn btn-secondary ml-3 mb-5"
            onClick={this.allDone.bind(this)}
          >
            All Done
          </button>

          <TodoList
            todos={this.state.todos}
            toggleTodoDone={this.toggleTodoDone.bind(this)}
            removeTodo={this.removeTodo.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
