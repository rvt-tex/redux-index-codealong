import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodosContainer extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, id) => (
          <Todo text={todo} key={id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};
export default connect(mapStateToProps)(TodosContainer);