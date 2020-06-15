import React from "react";
import { Link } from "react-router-dom";

import "./BikeTile.scss";

function BikeTile({ bike }) {
  return (
    <div className="BikeTile">
      <Link className="BikeTile-link" to={`/bikes/${bike.name.toLowerCase()}`}>
        <img
          src={bike.colors[0].path}
          alt={bike.name}
          className="BikeTile-img"
        />
      </Link>
      <div className="BikeTile-info">
        <h3 className="BikeTile-info-heading">{bike.name}</h3>
        <ul className="BikeTile-info-list">
          <li className="BikeTile-info-item">
            <span className="BikeTile-info-span">{bike.info.rearTravel}</span>
            <span className="BikeTile-info-span">Rear Travel</span>
          </li>
          <li className="BikeTile-info-item">
            <span className="BikeTile-info-span">{bike.info.wheelSize}</span>
            <span className="BikeTile-info-span">Wheel Size</span>
          </li>
          <li className="BikeTile-info-item">
            <span className="BikeTile-info-span">{bike.info.designedFor}</span>
            <span className="BikeTile-info-span">Designed For</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BikeTile;
