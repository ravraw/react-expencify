import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("Should render ExpenseList with expenses", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const wrapper = shallow(
    <ExpenseList expenses={expenses} filters={filters} />
  );
  expect(wrapper).toMatchSnapshot();
});
