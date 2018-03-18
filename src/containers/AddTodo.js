import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

class AddTodo extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    if (!this.input.value.trim()) return;
    this.props.addTodo(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={node => (this.input = node)} />
        <button type="submit"> Add </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
