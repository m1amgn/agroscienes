import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import picture from "../plant.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={picture} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="light"><Link to="/elementsform">Перейти</Link></Button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={picture} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="light"><Link to="/tankform">Перейти</Link></Button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={picture} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="light"><Link to="/tankform">Перейти</Link></Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
