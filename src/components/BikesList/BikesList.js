import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import BikeTile from "../BikeTile/BikeTile";
import WarrantyTile from "../WarrantyTile/WarrantyTile";

import bikes from "../../data/bikes";
import "./BikesList.scss";

import { fadeIn } from "../../animations.js";

class BikesList extends Component {
  constructor(props) {
    super(props);
    this.innerRef = null;
  }

  componentDidMount() {
    const introAnimation = fadeIn(this.innerRef);
    introAnimation.play();
  }

  render() {
    return (
      <section className="BikeList">
        <div className="BikeList-inner" ref={(el) => (this.innerRef = el)}>
          {bikes.map((bike) => (
            <BikeTile key={uuidv4()} bike={bike} />
          ))}
          <WarrantyTile />
        </div>
      </section>
    );
  }
}

export default BikesList;
