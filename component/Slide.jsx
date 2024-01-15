import React from "react";
import Linklist from "./Linklist";

export default function Slide() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarLeft">
            <h1>Logo</h1>
        </div>
        <div className="navbarRight">
        <Linklist /> 
        </div>
      </div>
      <div className="miniSlider">
        <div className="introSlider">
          <h1>Intro</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ab consequuntur ad, est enim maxime natus amet, nisi assumenda, quam
            minima. Ratione necessitatibus eos dolore a debitis perferendis
            consequuntur tempore.
          </p>
        </div>
        <div className="featureSlider"></div>
      </div>
    </div>
  );
}
