import React from "react";
import { AddExpencePage } from "../../components/AddExpencePage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpencePage onSubmit={onSubmit} history={history} id="form" />
  );
});

test("Should render correctly AddExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
