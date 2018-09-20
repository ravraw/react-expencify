import moment from "moment";
import getFilteredExpenses from "../../selectors/getFilteredExpenses";
import expenses from "../fixtures/expenses";

// by text
test("should filter by text", () => {
  const filters = {
    text: "t",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
// by startdate
test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filters);
  expect(result).toEqual([expenses[3], expenses[2], expenses[0]]);
});

//by endDate
test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  const result = getFilteredExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

//by date

test("should filter by Date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filters);
  expect(result).toEqual([expenses[3], expenses[2], expenses[0], expenses[1]]);
});

//by amount

test("should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filters);
  expect(result).toEqual([expenses[3], expenses[1], expenses[0], expenses[2]]);
});
