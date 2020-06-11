import React from "react";
import { features } from "../data/features.js";

function App(props) {
  console.log(features);
  return (
    <div>
      <img src={features[0].imageSrc} alt="" />
    </div>
  );
}

export default App;
