import React, {Component} from 'react';
import "../header/header.css"
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="test">

                    </div>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
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