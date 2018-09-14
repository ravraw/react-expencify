import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpencePage from "../components/AddExpencePage";
import EditExpencePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => (
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

export default AppRouter;
