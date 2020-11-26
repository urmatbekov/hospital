import React, {Component, Fragment} from 'react';
import Carousels from "../carousels/carousels";
import Best from "../best/best";
import ParallaxSection from "../parallax/parallax";
import Section from "../section/section";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Carousels/>
                <Best/>
                <ParallaxSection/>
                <Section/>
            </Fragment>
        );
    }
}

export default Index;