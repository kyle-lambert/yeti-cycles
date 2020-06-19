import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { fadeIn } from "../../animations";
import "./BikeTile.scss";

class BikeTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: this.props.bike.colors[0].id,
    };
    this.bikeTile = null;
  }

  componentDidMount() {
    const introAnimation = fadeIn(this.bikeTile);
    introAnimation.play();
  }

  handleClick = (e) => {
    this.setState({ activeId: e.target.value });
  };

  getLinkPath = () => {
    const { bike } = this.props;
    return `/bikes/${bike.name.toLowerCase()}`;
  };

  getImageSrc = () => {
    const { colors } = this.props.bike;
    const { activeId } = this.state;
    return colors.find((color) => color.id === activeId).path;
  };

  colorButtonsJSX = () => {
    const { colors } = this.props.bike;
    const { activeId } = this.state;
    const getClassNames = (color) => {
      return `BikeTile-colordot ${color.id === activeId ? "active" : ""}`;
    };

    return colors.map((color) => (
      <button
        className={getClassNames(color)}
        key={uuidv4()}
        type="button"
        value={color.id}
        disabled={activeId === color.id}
        style={{ backgroundColor: color.hexCode }}
        onClick={this.handleClick}></button>
    ));
  };

  render() {
    const { bike } = this.props;
    return (
      <div className="BikeTile" ref={(el) => (this.bikeTile = el)}>
        <Link className="BikeTile-link" to={this.getLinkPath()}>
          <img
            src={this.getImageSrc()}
            alt={bike.name}
            className="BikeTile-image"
          />
        </Link>
        <div className="BikeTile-info">
          <h3 className="BikeTile-name">{bike.name}</h3>
          <ul className="BikeTile-list">
            <li className="BikeTile-item">
              <span>{bike.info.rearTravel}</span>
              <span>Rear Travel</span>
            </li>
            <li className="BikeTile-item">
              <span>{bike.info.wheelSize}</span>
              <span>Wheel Size</span>
            </li>
            <li className="BikeTile-item">
              <span>{bike.info.designedFor}</span>
              <span>Designed For</span>
            </li>
          </ul>
          <div className="BikeTile-colordot-group">
            {this.colorButtonsJSX()}
          </div>
        </div>
      </div>
    );
  }
}

export default BikeTile;
