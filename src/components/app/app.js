import React, {Component} from 'react';

import Best from "../best/best";

import Header from "../header/header";
import Swiper from "../carousels/carousels";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Swiper/>
                <Best/>
            </div>
        );
    }
}

export default App;