import moment from "moment";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

//setStartDate
test("Should setup setStartDate action object", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});
//setEndtDate
test("Should setup setEndtDate action object", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

//setTextFilter with value
test("setup setTextFilter action object ", () => {
  const result = setTextFilter("This is text for filter");
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: "This is text for filter"
  });
});

//setTextFilter with default in use(no value)
test("setup setTextFilter action object  for DEFAULT values", () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

//sortByDate
test("Should setup action object for sortByDate", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

//sortByAmount
test("Should setup action object for sortByAmount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
