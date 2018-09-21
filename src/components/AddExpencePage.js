import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class AddExpencePage extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <p>Add expense page</p>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expense => dispatch(addExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpencePage);
