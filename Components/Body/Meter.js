import React from "react";
import "./meter.css";

const Meter = (props) => {
  return (
    <>
      <h1>Gauge - 6 levels</h1>

      <div className="gauge-wrapper">
        <div className={"gauge four rischio" + props.lvl}>
          <div className="slice-colors">
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
          </div>
          <div className="needle"></div>
          <div className="gauge-center">
            <div className="label">RISK</div>
            <div className="number">Low</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meter;
