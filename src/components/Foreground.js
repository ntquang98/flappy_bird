import React from "react";
import baseImg from "../../assets/base.png";
const Foreground = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: 336,
        height: 112,
        background: `url(${baseImg})`,
      }}
    ></div>
  );
};

export default Foreground;
