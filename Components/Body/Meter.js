import React from "react";
import "./meter.css";

const Meter = (props) => {
  return (
    <>
      <h1>Gauge - 6 levels</h1>

      <div class="gauge-wrapper">
        <div class={"gauge four rischio" + props.lvl}>
          <div class="slice-colors">
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
          </div>
          <div class="needle"></div>
          <div class="gauge-center">
            <div class="label">RISK</div>
            <div class="number">Low</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meter;
