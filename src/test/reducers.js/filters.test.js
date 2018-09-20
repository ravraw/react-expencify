import moment from "moment";

import filterReducer from "../../reducers/filters";

// set init reducer state
test("should initiate the initial state", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

// set sortBy to amount

test("Should set sortBy to amount", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_AMOUNT"
  });
  expect(state.sortBy).toBe("amount");
});

//set sortBy to date
test("Should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, {
    type: "SORT_BY_DATE"
  });
  expect(state.sortBy).toBe("date");
});

//set start date

test("Should set startdate", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(moment());
});

//set end date
test("Should set endDate", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(moment());
});

// set text
test("Should set text value", () => {
  const text = "text string";
  const action = {
    type: "SET_TEXT_FILTER",
    text: text
  };
  const state = filterReducer(undefined, action);

  expect(state.text).toBe("text string");
});
