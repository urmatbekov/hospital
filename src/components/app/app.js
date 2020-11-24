import React, {Component} from 'react';
import Best from "../best/best";
import Header from "../header/header";
import Swiper from "../carousels/carousels";
import ParallaxSection from "../parallax/parallax";
import Section from "../section/section";




class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Swiper/>
                <Best/>
                <ParallaxSection/>
                <Section/>
            </div>
        );
    }
}

export default App;