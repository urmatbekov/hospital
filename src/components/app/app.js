import React, {Component} from 'react';
<<<<<<< HEAD
import Header from "../header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from "../page";
import Register from "../auth/register/register";
import Login from "../auth/login/login";
=======
import Best from "../best/best";
import Header from "../header/header";
import Carousel from "../carousels/carousels";
import Nav from "../nav/nav";

>>>>>>> bf2000272cb0fe5127d792586b11bfe796b5f99f


class App extends Component {
    render() {
        return (
<<<<<<< HEAD
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Index/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
=======
            <div>
                <Nav/>
                <Header/>
                <Carousel/>
                <Best/>

            </div>
>>>>>>> bf2000272cb0fe5127d792586b11bfe796b5f99f
        );
    }
}

export default App;