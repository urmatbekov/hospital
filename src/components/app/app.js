import React, {Component} from 'react';
import Header from "../header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from "../page";
import Register from "../auth/register/register";
import Login from "../auth/login/login";


class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Index/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                        <Login/>
                </Switch>
            </Router>
        );
    }
}

export default App;