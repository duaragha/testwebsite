import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

const CarouselComp = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block "
                    src="https://via.placeholder.com/3000x600"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComp;