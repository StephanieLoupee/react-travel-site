import React, { Component } from 'react';

import italyImage from './assets/images/italy.jpg'
import airplaneImage from './assets/images/airplane.jpg'

import { Carousel } from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={italyImage}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={airplaneImage}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Hero;
