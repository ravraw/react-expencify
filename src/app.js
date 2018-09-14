import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.scss";
const ExpenseDashboardPage = () => (
  <div>
    <p>This is ExpenseDashboardPage</p>
  </div>
);

const AddExpencePage = () => (
  <div>
    <p>Add expense page</p>
  </div>
);

const EditExpencePage = () => (
  <div>
    <p> Edit expense page</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>Help page</p>
  </div>
);
const PageNotFound = () => (
  <div>
    <p>
      404 - PAGE NOT FOUND <Link to="/">GO BACK</Link>
    </p>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="active" exact>
      HOME
    </NavLink>
    <NavLink to="/add" activeClassName="active">
      ADD EXPENCE
    </NavLink>
    <NavLink to="/edit" activeClassName="active">
      EDIT EXPENCE
    </NavLink>
    <NavLink to="/help" activeClassName="active">
      HELP
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/add" component={AddExpencePage} />
        <Route path="/edit" component={EditExpencePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
