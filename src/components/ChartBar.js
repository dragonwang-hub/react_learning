import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const fillHeight = props.data.value/props.max * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
      </div>
      <label className="chart-bar__label">{props.data.monthName}</label>
    </div>
  );
};

export default ChartBar;
