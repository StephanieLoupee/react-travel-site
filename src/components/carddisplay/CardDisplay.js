import React, { Component } from 'react';

import Card from '../card/Card'

class CardDisplay extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <Card country="spain" tourismSite="http://www.spain.info/en_US/" />
          <Card country="italy" tourismSite="http://www.spain.info/en_US/" />
          <Card country="aruba" tourismSite="http://www.spain.info/en_US/" />
          <Card country="chile" tourismSite="http://www.spain.info/en_US/" />
        </div>
      </div>
    );
  }
}

export default CardDisplay;
