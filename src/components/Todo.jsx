import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todo extends Component {
  state = {};
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleCheckbox={this.props.handleCheckbox}
        handleDelete={this.props.handleDelete}
        handleEdit={this.props.handleEdit}
      />
    ));
  }
}

// PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};
export default Todo;
