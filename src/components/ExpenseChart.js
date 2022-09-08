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

  const maxAmountByYear = Math.max(
    ...props.dataByYear.map((item) => item.amount)
  );

  const amountPercentageByMonth = monthName.map((month) => {
    const sumByMonth = props.dataByYear
      .filter((item) => item.date.month == month)
      .map((item) => item.amount)
      .reduce((partialSum, amount) => partialSum + amount, 0);

    console.log("--->sumByMonth", month, sumByMonth);
    return {
      monthName: month,
      value: sumByMonth / maxAmountByYear,
    };
  });

  return (
    <div className="chart">
      {console.log("--->", amountPercentageByMonth)}
      {console.log("--->", props.dataByYear)}
      {amountPercentageByMonth.map((item) => (
        <ChartBar key={uuidv4()} data={item} />
      ))}
    </div>
  );
};

export default ExpenseChart;
