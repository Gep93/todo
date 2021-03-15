import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      todo: { value: this.props.value, id: this.props.id },
    };

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }

  toggleForm(evt) {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({
      todo: { ...this.state.todo, [evt.target.name]: evt.target.value },
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();

    this.props.updateTodo(this.state.todo);
    this.toggleForm();
  }

  handleToggle() {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate}>
            <input
              name="value"
              value={this.state.todo.value}
              onChange={this.handleChange}
            />
            <button>SAVE</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <span
            className={this.props.completed ? "Todo-completed" : ""}
            onClick={this.handleToggle}
          >
            {this.props.value}
          </span>
          <div className="Todo-icons">
            <i className="fas fa-pen" onClick={this.toggleForm}></i>
            <i className="fas fa-trash" onClick={this.handleDeleteTodo}></i>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
