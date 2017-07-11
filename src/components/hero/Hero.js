import React, { Component } from 'react';

import italyImage from './assets/images/italy.jpg'
import airplaneImage from './assets/images/airplane.jpg'

class Hero extends Component {
  render() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={italyImage} alt="this is an alt tag" />
          </div>
          <div className="item">
            <img src={airplaneImage} alt="stuff" />
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Hero;
