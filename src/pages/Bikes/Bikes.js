import React, { Component } from "react";

import BikesList from "../../components/BikesList/BikesList";
import Warranty from "../../components/WarrantyTile/WarrantyTile";

import "./Bikes.scss";

class Bikes extends Component {
  render() {
    return (
      <div className="Bikes">
        <BikesList />
        {/* <Warranty /> */}
      </div>
    );
  }
}

export default Bikes;
