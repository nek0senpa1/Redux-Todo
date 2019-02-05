import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo } from '../Actions/actions';

class TodoList extends React.Component {
  state = {
    todoNew: ""
  };

  handleChanges = e => {
    this.setState({ todoNew: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    //call the addNewFriend action creator
    this.props.addNewFriend(this.state.newFriend);
  };

  toggleFriend = (e, index) => {
    e.preventDefault();
    //call the action creator
    this.props.toggleFriend(index);
  };

  render() {
    return (
      <Fragment>
        <h2>Hello friends</h2>
        <div>
          {this.props.todoThings.map((todoWidget, index) => (
            <h4
              //className={friend.besties ? "bestie" : ""}
              onClick={e => this.toggleFriend(e, index)}
              key={index}
            >
              {todoWidget.todo}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.handleChanges}
        />
        <button onClick={this.addFriend}>Add friend</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todoThings: state.todo
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);