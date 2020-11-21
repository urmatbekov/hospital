import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";


class Carousels extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="First slide"
                    />
                    <div>
                        dwadwad
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/slider/img-01.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carousels;