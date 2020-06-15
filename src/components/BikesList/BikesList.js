import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import BikeTile from "../BikeTile/BikeTile";

import bikes from "../../data/bikes";
import "./BikesList.scss";

class BikesList extends Component {
  render() {
    return (
      <section className="BikesList">
        <div className="BikesList-inner">
          {bikes.map((bike) => (
            <BikeTile key={uuidv4()} bike={bike} />
          ))}
        </div>
      </section>
    );
  }
}

export default BikesList;
