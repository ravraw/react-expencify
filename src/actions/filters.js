// SET TEXT FILTER

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT BY DATE / AMOUNT

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET START / END DATES

export const setStartDate = (startDate = new Date(0).getTime()) => ({
  type: "SET_START_DATE",
  startDate
});
export const setEndDate = (endDate = new Date().getTime()) => ({
  type: "SET_END_DATE",
  endDate
});
