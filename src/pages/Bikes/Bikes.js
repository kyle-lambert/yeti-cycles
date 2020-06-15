import React, { Component } from "react";

import BikesList from "../../components/BikesList/BikesList";

import "./Bikes.scss";

class Bikes extends Component {
  render() {
    return (
      <div className="Bikes">
        <BikesList />
      </div>
    );
  }
}

export default Bikes;
