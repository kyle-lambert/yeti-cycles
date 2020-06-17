import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";

import "./BikeTile.scss";

class BikeTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: this.props.bike.colors[0].id,
      inProp: false,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    gsap.from(this.imageRef, {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power4.in",
    });
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
      return `biketile-colordot ${color.id === activeId ? "active" : ""}`;
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
      <div className="biketile">
        <Link className="biketile-link" to={this.getLinkPath()}>
          <img
            ref={(el) => (this.imageRef = el)}
            src={this.getImageSrc()}
            alt={bike.name}
            className="biketile-image"
          />
        </Link>
        <div className="biketile-info">
          <h3 className="biketile-name">{bike.name}</h3>
          <ul className="biketile-list">
            <li className="biketile-item">
              <span>{bike.info.rearTravel}</span>
              <span>Rear Travel</span>
            </li>
            <li className="biketile-item">
              <span>{bike.info.wheelSize}</span>
              <span>Wheel Size</span>
            </li>
            <li className="biketile-item">
              <span>{bike.info.designedFor}</span>
              <span>Designed For</span>
            </li>
          </ul>
          <div className="biketile-colordot-group">
            {this.colorButtonsJSX()}
          </div>
        </div>
      </div>
    );
  }
}

export default BikeTile;

// function BikeTile({ bike }) {
//   return (
//     <div className="BikeTile">
//       <Link className="BikeTile-link" to={`/bikes/${bike.name.toLowerCase()}`}>
//         <img
//           src={bike.colors[0].path}
//           alt={bike.name}
//           className="BikeTile-img"
//         />
//       </Link>
// {/* <div className="BikeTile-info">
//   <h3 className="BikeTile-info-heading">{bike.name}</h3>
//   <ul className="BikeTile-info-list">
//     <li className="biketile-item">
//       <span>{bike.info.rearTravel}</span>
//       <span>Rear Travel</span>
//     </li>
//     <li className="biketile-item">
//       <span>{bike.info.wheelSize}</span>
//       <span>Wheel Size</span>
//     </li>
//     <li className="biketile-item">
//       <span>{bike.info.designedFor}</span>
//       <span>Designed For</span>
//     </li>
//   </ul> */}
// </div>
//     </div>
//   );
// }

// export default BikeTile;
