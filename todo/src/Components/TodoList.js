import React from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo } from '../Actions/actions';


class TodoList extends React.Component {
  state = {
    todoNew: ""
  };

  handleChanges = e => {
    this.setState({ todoNew: e.target.value });
  };

  addyTodo = e => {
    e.preventDefault();
    //call the addNewFriend action creator
    this.props.addTodo(this.state.todoNew);
  };

  toggleTodoey = (e, index) => {
    e.preventDefault();
    //call the action creator
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div>
        <h2>----------------------</h2>
        <div>
          {this.props.todoThings.map((todoWidget, index) => (
            <h4
              className={todoWidget.done ? "done" : "notdone"}
              onClick={e => this.toggleTodoey(e, index)}
              key={index}
            >
              {todoWidget.todo}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.todoNew}
          onChange={this.handleChanges}
        />
        <br></br>
        <button onClick={this.addyTodo}>Add Thing Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoThings: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);