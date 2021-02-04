import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



const PictureSlider = () => {
    
    return (

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/beach-family.jpg"
                alt="First slide"
                style={{ width: "5325", height: "3550" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/friends.jpg"
                alt="Third slide"
                style={{ width: "4626", height: "3168" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/walk-family.jpg"
                alt="Third slide"
                style={{ width: "6016", height: "4016" }}
                />
            </Carousel.Item>
        </Carousel>
    )
};

export default PictureSlider;