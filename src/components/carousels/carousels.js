import React, {Component} from 'react';
import "./swiper.css"
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

class Carousels extends Component {
    render() {
        return (
            <Swiper
                loop
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <div className="slider">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="th-sliderContent">
                                        <h1>Our Dedication is what<span>You can Trust</span></h1>
                                        <div className="th-description">
                                            <p>The mate was a mighty sailing man the skipper brave and sure five
                                                passengers set sail that day for a three hour tour a three hour tour
                                                being thank you</p>
                                        </div>
                                        <div className="th-btnS">
                                            <a className="th-btn" href="#">Purchase</a>
                                            <a className="th-btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="th-sliderContent">
                                        <h1>Our Dedication is what<span>You can Trust</span></h1>
                                        <div className="th-description">
                                            <p>The mate was a mighty sailing man the skipper brave and sure five
                                                passengers set sail that day for a three hour tour a three hour tour
                                                being thank you</p>
                                        </div>
                                        <div className="th-btnS">
                                            <a className="th-btn" href="#">Purchase</a>
                                            <a className="th-btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="th-sliderContent">
                                        <h1>Our Dedication is what<span>You can Trust</span></h1>
                                        <div className="th-description">
                                            <p>The mate was a mighty sailing man the skipper brave and sure five
                                                passengers set sail that day for a three hour tour a three hour tour
                                                being thank you</p>
                                        </div>
                                        <div className="th-btnS">
                                            <a className="th-btn" href="#">Purchase</a>
                                            <a className="th-btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
            </Swiper>
        );
    }
}

export default Carousels;