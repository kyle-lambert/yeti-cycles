import React, { Component } from "react";
import imagePath from "../../images/SLorence_Yeti_SB165_4479.jpg";

import "./WarrantyTile.scss";

class WarrantyTile extends Component {
  render() {
    return (
      <section className="WarrantyTile">
        <div className="WarrantyTile-inner">
          <img src={imagePath} alt="" className="WarrantyTile-image" />
          <div className="WarrantyTile-content"></div>
        </div>
      </section>
    );
  }
}

export default WarrantyTile;
