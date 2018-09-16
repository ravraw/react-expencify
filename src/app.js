import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    note: "Month January,18",
    amount: "20000"
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "Month January,18",
    amount: "15000"
  })
);

store.dispatch(setTextFilter("water"));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
