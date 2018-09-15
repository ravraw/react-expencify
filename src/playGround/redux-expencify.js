import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// remove expense

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET TEXT FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT BY DATE / AMOUNT

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET START / END DATES

const setStartDate = (startDate = new Date(0).getTime()) => ({
  type: "SET_START_DATE",
  startDate
});
const setEndDate = (endDate = new Date().getTime()) => ({
  type: "SET_END_DATE",
  endDate
});

// REDUCERS
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // return state.concat(action.expense);
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(exp => {
        if (exp.id === action.id) {
          const updatedExp = {
            ...exp,
            ...action.updates
          };
          return updatedExp;
        }
        return exp;
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "......",
  sortBy: "",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};

// const store = createStore((state = { count: 1 }, action) => {
//   return state;
// });

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      console.log(expense.createdAt, text, sortBy, startDate, endDate);
      const startDateMatch = expense.createdAt >= startDate;
      const endDateMatch = expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text);
      console.log(startDateMatch, endDateMatch, textMatch);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
//
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// dispatchers
// add exp
const expenseOne = store.dispatch(
  addExpense({
    description: "rent 1",
    note: "JANUARY RENT",
    amount: 45000,
    createdAt: 1001
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: " Rent 2",
    note: "February RENT",
    amount: 45000,
    createdAt: 1002
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: " rent 3",
    note: "March RENT",
    amount: 55000,
    createdAt: 1003
  })
);

const expenseFour = store.dispatch(
  addExpense({
    description: " Rent 4",
    note: "March RENT",
    amount: 11000,
    createdAt: 1004
  })
);
// remove exp
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// edit exp
store.dispatch(
  editExpense(expenseTwo.expense.id, {
    description: " rent new entry----",
    note: "changed ......",
    amount: 9000,
    lastUpdatedAt: 999
  })
);

//set text filter

store.dispatch(setTextFilter("ren"));

// sort by date  / amount
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
store.dispatch(setStartDate(1));
store.dispatch(setEndDate(12000));

// // demo state
// const demoState = {
//   expenses: [
//     {
//       id: "wertyuio",
//       description: "jnauary month rent",
//       note: "going to last",
//       amount: 45000,
//       creditedAt: 0
//     }
//   ],
//   filters: {
//     text: "",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// let filterfilter = {
//   text: "",
//   sortBy: "amount",
//   startDate: new Date(0),
//   endDate: new Date()
// };

// const obj = {
//   name: "rav",
//   age: 20
// };
