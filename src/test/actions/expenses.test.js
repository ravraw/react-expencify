import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup removeExpense action object ", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should setup action object for editExpense()", () => {
  const action = editExpense("abc123", {
    description: "edited description",
    note: "edited note"
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      description: "edited description",
      note: "edited note"
    }
  });
});

test("Should setup action object for addExpense", () => {
  const expenseData = {
    description: "test description",
    amount: 5000,
    createdAt: 1000,
    note: "test note"
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should setup action object for addExpense  with DEFAULT VALUES", () => {
  const action = addExpense();

  expect(action).toEqual({
    id: expect.any(String),
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  });
});
