import Header from "../../components/Header";
import React from "react";

import { shallow } from "enzyme";

test("Should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("h1").length).toBe(1);
});
