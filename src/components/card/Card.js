import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div style={{textTransform: 'capitalize'}} id={this.props.country} className="col-md-3 card">
        <h3>{this.props.country}</h3>
        <a href={this.props.tourismSite} target="_blank"><span style={{textTransform: 'capitalize'}}>{this.props.country}</span> Tourism Site</a>
      </div>
    );
  }
}

export default Card;
