import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  const expense = props.expenses.find(exp => exp.id === props.match.params.id);
  // console.log(expense);
  return (
    <div>
      <h3>{expense.description}</h3>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>

      <ExpenseForm
        expense={expense}
        onSubmit={updatedExp => {
          props.dispatch(editExpense(expense.id, updatedExp));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(EditExpensePage);
