import React from "react";
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import FilterPanel from "components/filterPanel";
import ReduxList from "components/reduxList";

const App = () => (
    <BrowserRouter>
        <div className="page-wrapper">
            <nav className="panel page-nav">
                <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/redux">
                    Список дел
                </NavLink>
                <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/filter">
                    Фильтр
                </NavLink>
            </nav>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/redux" />} />
                <Route path="/redux" component={ReduxList} />
                <Route path="/filter" component={FilterPanel} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
