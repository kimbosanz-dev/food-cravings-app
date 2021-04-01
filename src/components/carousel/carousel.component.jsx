import React from 'react';
import { Button } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const CarouselComponent = () => (
    <div className="carousel-container">
    <Carousel>
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/ySSqWfm/veggies.jpg"
            alt="First slide"
            /> */}
            <div className="carousel-item d-block w-100">
                <h1>First Slide</h1>
            </div>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="shop-btn" variant="contained" size="large">Shop Now</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/fNv90js/american-food.jpg"
            alt="Second slide"
            /> */}
            <div className="carousel-item d-block w-100">
                <h1>Second Slide</h1>
            </div>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className="shop-btn" size="large">Shop Now</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/Vtcw9tt/food2-placeholder.jpg"
            alt="Third slide"
            /> */}
            <div className="carousel-item d-block w-100">
                <h1>Third Slide</h1>
            </div>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button className="shop-btn" size="large">Shop Now</Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
)