import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => {
      return { todos: [...state.todos, { value: todo, id: uuidv4() }] };
    });
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos });
  }

  updateTodo(updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === updatedTodo.id) return { ...updatedTodo };
      else return { ...todo };
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    console.log(id);
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return { ...todo };
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          value={todo.value}
          id={todo.id}
          completed={todo.completed}
          toggleCompletion={this.toggleCompletion}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        {todos}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
