import React from "react";
import Huile1 from "./../../assets/img1.jpeg";
import Huile2 from "./../../assets/img2.jpeg";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Huile1})`
          }}
        >
          <a>Huile Essentiels</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Huile2})`
          }}
        >
          <a>Huile Essentiels</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
