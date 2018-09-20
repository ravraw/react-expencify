import expensesReducer from "../../reducers/expenses";
import moment from "moment";
// import currentState from "../fixtures/expenses";

test("Should set the initial default state as empty array []", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// add expense
test("Should add a new expense", () => {
  const currentState = [];
  const state = expensesReducer(currentState, {
    type: "ADD_EXPENSE",
    expense: {
      text: "new expense"
    }
  });

  expect(state.length).toBe(1);
});

// remove expense
test("Should  remove expense", () => {
  const currentState = [
    {
      id: "123abc",
      description: "text string",
      amount: 1200,
      createdAt: moment()
    }
  ];
  const state = expensesReducer(currentState, {
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });

  expect(state.length).toBe(0);
});

// edit expense
test("Should edit expense", () => {
  const currentState = [
    {
      id: "123abc",
      description: "text string",
      amount: 1200,
      createdAt: moment()
    }
  ];
  const state = expensesReducer(currentState, {
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      amount: 1500
    }
  });

  expect(state[0].amount).toBe(1500);
});
