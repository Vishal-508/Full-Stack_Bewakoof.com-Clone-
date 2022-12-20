import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div style={{display:"flex"}} >
                <img
              style={{ height: "669px", }}
              src="https://images.bewakoof.com/uploads/grid/app/very-peri-homepage-1661439183.jpg"
              
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg"
             
              alt="..."
            />
                   
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export {DemoCarousel}