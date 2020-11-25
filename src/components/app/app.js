import React, {Component} from 'react';
import Best from "../best/best";
import Header from "../header/header";
import ParallaxSection from "../parallax/parallax";
import Section from "../section/section";
import Carousels from "../carousels/carousels";




class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousels/>
                <Best/>
                <ParallaxSection/>
                <Section/>
            </div>
        );
    }
}

export default App;