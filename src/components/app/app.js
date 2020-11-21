import React, {Component} from 'react';

import Best from "../best/best";

import Header from "../header/header";
import Carousel from "../carousels/carousels";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <Best/>
            </div>
        );
    }
}

export default App;