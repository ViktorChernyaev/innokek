import React from "react";
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import FilterPanel from "components/filterPanel";
import TodoList from "components/todoList";

const App = () => (
    <BrowserRouter>
        <div className="page-wrapper">
            <nav className="panel page-nav">
                <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/todo">
                    Список дел
                </NavLink>
                <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/filter">
                    Фильтр
                </NavLink>
            </nav>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/todo" />} />
                <Route path="/todo" component={TodoList} />
                <Route path="/filter" component={FilterPanel} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
