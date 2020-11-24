import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import "./parallax.css";
import AnimationCount from 'react-count-animation';

class ParallaxSection extends Component {
    render() {
        const countOn = {
            start: 1,
            count: 125,
            duration: 3000,
            animation: 'up',
        };
        const countTwo = {
            start: 1,
            count: 1180,
            duration: 3000,
            animation: 'up',
        };
        const countThree = {
            start: 1,
            count: 650,
            duration: 3000,
            animation: 'up',
        };
        const countFour = {
            start: 1,
            count: 1420,
            duration: 3000,
            animation: 'up',
        };
        return (
            <Parallax style={{width: "100%"}}
                      bgImage="image/parallax/bgparallax-01.jpg" bgImageAlt="the cat" strength={500}>
                <div className="th-parallax">
                    <div className="container">
                        <div className="row">
                            <div className="th-counters">
                                <div className="th-counter">
                                <span className="th-counterIcon">
                                    <i className="fa fa-trophy"/>
                                </span>
                                    <div className="th-counterBox">
                                        <div className="th-counterTitle">
                                            <h2>Years of Experience</h2>
                                        </div>
                                        <div className="th-count">
                                            <h3><AnimationCount {...countOn}/></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="th-counter">
                                  <span className="th-counterIcon">
                                    <i className="fa fa-stethoscope"/>
                                </span>
                                    <div className="th-counterBox">
                                        <div className="th-counterTitle">
                                            <h2>Number Of Doctors</h2>
                                        </div>
                                        <div className="th-count">
                                            <h3><AnimationCount {...countTwo}/></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="th-counter">
                                  <span className="th-counterIcon">
                                    <i className="fa fa-stethoscope"/>
                                </span>
                                    <div className="th-counterBox">
                                        <div className="th-counterTitle">
                                            <h2>Precious Awards</h2>
                                        </div>
                                        <div className="th-count">
                                            <h3><AnimationCount {...countThree}/></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="th-counter">
                                  <span className="th-counterIcon">
                                    <i className="fa fa-stethoscope"/>
                                </span>
                                    <div className="th-counterBox">
                                        <div className="th-counterTitle">
                                            <h2>Our Happy Clients</h2>
                                        </div>
                                        <div className="th-count">
                                            <h3><AnimationCount {...countFour}/></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        );
    }
}

export default ParallaxSection;