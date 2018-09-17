import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getFilteredExpenses from "./selectors/getFilteredExpenses";
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    note: "water bill for January,18",
    amount: "20000",
    createdAt: 0
  })
);

store.dispatch(
  addExpense({
    description: "Rent bill",
    note: "Rent for January,18",
    amount: "10000",
    createdAt: 2
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "Gas bill for  January,18",
    amount: "15000",
    createdAt: 1
  })
);

// setInterval(() => {
//   store.dispatch(setTextFilter("gas"));
// }, 3000);

// setInterval(() => {
//   store.dispatch(setTextFilter("water"));
// }, 6000);

// setInterval(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 9000);

const state = store.getState();

const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
// console.log(filteredExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
