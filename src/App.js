import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; //npm install --save bootstrap

import Todo from "./components/Todo";
import Navbar from "./components/layouts/Navbar";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false
      },
      {
        id: 2,
        title: "Todo 2",
        completed: false
      },
      {
        id: 3,
        title: "Todo 3",
        completed: false
      }
    ]
  };

  // Toggle Complete
  handleCheckbox = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if (todo.id != id)
        return todo;
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div class="card">
          <div class="card-body" style={styles.center}>
            <Todo
              todos={this.state.todos}
              handleCheckbox={this.handleCheckbox}
              handleDelete={this.handleDelete}
              handleEdit={this.handleDelete}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};
export default App;
