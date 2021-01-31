import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { photos } from '../LandingPage/photos';


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
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/friends.jpg"
                alt="Third slide"
                style={{ width: "4626", height: "3168" }}
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/walk-family.jpg"
                alt="Third slide"
                style={{ width: "6016", height: "4016" }}
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default PictureSlider;