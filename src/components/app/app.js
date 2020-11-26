import React, {Component} from 'react';
import Best from "../best/best";
import Header from "../header/header";
import Carousel from "../carousels/carousels";
import Nav from "../nav/nav";



class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <Carousel/>
                <Best/>

            </div>
        );
    }
}

export default App;