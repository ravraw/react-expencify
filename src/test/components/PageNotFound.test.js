import React from "react";
import { Link } from "react-router-dom";
import { shallow } from "enzyme";

import PageNotFound from "../../components/PageNotFound";

test("Should render PageNotFound ", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
