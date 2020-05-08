import React, { isValidElement } from "react";
import bgPipeAbove from "../../assets/pipe-above.png";
import bgPipeDown from "../../assets/pipe.png";

import { connect } from "react-redux";

const Pipe = ({ x, pipes }) => {
  return (
    <div style={{ position: "relative" }}>
      {pipes.map(({ topHeight }, i) => (
        <div key={i} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: x + i * 200,
              width: 52,
              height: topHeight,
              background: `url(${bgPipeAbove})`,
              backgroundPosition: "bottom",
              transition: "left 200ms",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: topHeight + 100,
              left: x + i * 200,
              width: 52,
              height: 200,
              background: `url(${bgPipeDown})`,
              transition: "left 200ms",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ pipe }) => ({ x: pipe.x, pipes: pipe.pipes });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
