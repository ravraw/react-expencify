import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="active" exact>
      HOME
    </NavLink>
    <NavLink to="/add" activeClassName="active">
      ADD EXPENCE
    </NavLink>

    <NavLink to="/help" activeClassName="active">
      HELP
    </NavLink>
  </header>
);

export default Header;
