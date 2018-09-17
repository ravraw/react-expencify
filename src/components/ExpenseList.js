import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import getFilteredExpenses from "../selectors/getFilteredExpenses";
import { connect } from "react-redux";

const ExpenseList = props => {
  const filteredExpenses = getFilteredExpenses(props.expenses, props.filters);

  const ExpList = filteredExpenses.map((el, index) => (
    <div key={el.id}>
      <ExpenseListItem {...el} />
    </div>
  ));

  return (
    <div>
      <h1>Expense LIST</h1>
      {ExpList}
      {props.filters.text}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
