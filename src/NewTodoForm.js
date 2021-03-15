import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <div>
          <input
            id="todo"
            name="todo"
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
          ></input>
          <button>ADD TODO</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
