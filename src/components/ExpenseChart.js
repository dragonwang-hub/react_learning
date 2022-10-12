import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChartBar from "./ChartBar";
import "./ExpenseChart.css";

const ExpenseChart = (props) => {

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const amountPercentageByMonth = monthName.map((month) => {
    const sumByMonth = props.dataByYear
      .filter((item) => item.date.month == month)
      .map((item) => Number(item.amount))
      .reduce((partialSum, amount) => partialSum + amount, 0);

    return {
      monthName: month,
      value: sumByMonth,
    };
  });

  const max = Math.max(...amountPercentageByMonth.map((item) => item.value))

  return (
    <div className="chart">
      {console.log("--->", amountPercentageByMonth)}
      {amountPercentageByMonth.map((item) => (
        <ChartBar key={uuidv4()} data={item} max={max}/>
      ))}
    </div>
  );
};

export default ExpenseChart;
