import React from "react";
import birdImg from "../../assets/bird.png";
import { connect } from "react-redux";

const Bird = ({ y, r }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: 100,
        width: 34,
        height: 24,
        background: `url(${birdImg})`,
        transform: `rotate(${r}deg)`,
        transition: "transform 200ms, top 200ms",
      }}
    ></div>
  );
};

const mapStateToProps = ({ bird }) => ({ y: bird.y, r: bird.r });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
