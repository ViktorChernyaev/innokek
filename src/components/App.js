import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import FilterPanel from "components/filterPanel";
import Options from "containers/options";

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="page-wrapper">
                <nav className="panel page-nav">
                    <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/options">
                        Опции
                    </NavLink>
                    <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/filter">
                        Фильтр
                    </NavLink>
                </nav>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/options" />} />
                    <Route path="/options" component={Options} />
                    <Route path="/filter" component={FilterPanel} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
