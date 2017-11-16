import React from "react";
import {
    Carousel
} from "react-bootstrap";

import "./slideshow.scss";

export default class Slideshow extends React.Component{
    render(){
        return (
            <Carousel controls={false} pauseOnHover={true} interval={3000}>
                <Carousel.Item>
                    <img className="img-responsive" alt="900x500" src="https://ak5.picdn.net/shutterstock/videos/27813136/thumb/1.jpg" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-responsive" alt="900x500" src="https://ak5.picdn.net/shutterstock/videos/27813136/thumb/1.jpg" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-responsive" alt="900x500" src="https://ak5.picdn.net/shutterstock/videos/27813136/thumb/1.jpg" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}