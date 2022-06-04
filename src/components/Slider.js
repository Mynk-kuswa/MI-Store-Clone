import React from "react";
// import Navbar from "./Navbar.js";
import { Carousel } from "react-bootstrap";
import "../styles/Slider.css"

import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <div className="Slider">
      <Carousel fade>
        {
          start.map((item, index) => (
            <Carousel.Item>
              <img
                key={index}
                className="d-block w-100"
                src={item}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }

      </Carousel>
    </div>

  );
};

export default Slider;
