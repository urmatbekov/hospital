import React, {Component} from 'react';
import Header from "../header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from "../page";
import Register from "../auth/register/register";
import Login from "../auth/login/login";
import Service from "../service";
import Cookie from "js-cookie";


class App extends Component {
    service = new Service()
    state = {
        user: {}
    }

    componentDidMount() {
        this.login()
    }

    login = () => {
        this.service.getUser().then((data) => {
            this.setState({user: data})
        }).catch(() => {
            this.logout()
        })
    }

    logout = () => {
        Cookie.remove("token")
        this.setState({user: {}})
    }


    render() {
        return (
            <Router>
                <Header user={this.state.user} logout={this.logout}/>
                <Switch>
                    <Route exact path="/">
                        <Index/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/login">
                        <Login login={this.login}/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default App;