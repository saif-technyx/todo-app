import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {}; //won't have a state, it will use props from parent.
  render() {
    //Destructuring
    const { id, title, completed } = this.props.todo;

    return (
      <React.Fragment>
        <div>
          <div
            className="rounded bg-light card-title"
            style={this.getTodoItemStyle()}
          >
            <div class="clearfix">
              <span>
                <input
                  type="checkbox"
                  onChange={this.props.handleCheckbox.bind(this, id)}
                />
              </span>{" "}
              <span
                className="text-primary"
                style={{ textDecoration: completed ? "line-through" : "none" }}
              >
                {title}
              </span>
              <span>
                <button
                  className="btn btn-danger btn-sm float-right"
                  style={{ marginLeft: "5px" }}
                  onClick={this.props.handleDelete.bind(this, id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info btn-sm float-right"
                  onClick={this.props.handleEdit.bind(this, id)}
                >
                  Edit
                </button>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getTodoItemStyle() {
    return {
      padding: "10px",
      width: "50rem"
    };
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default TodoItem;
