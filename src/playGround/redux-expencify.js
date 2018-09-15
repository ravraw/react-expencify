import { createStore, combineReducers } from "redux";

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const store = createStore((state = { count: 1 }, action) => {
//   return state;
// });

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filter: filterReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "wertyuio",
      description: "jnauary month rent",
      note: "going to last",
      amount: 45000,
      creditedAt: 0
    }
  ],
  filters: {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
