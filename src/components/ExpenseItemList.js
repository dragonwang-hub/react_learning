import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const ExpenseItemList = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const data = props.data.filter((item) => item.date.year == selectedYear);

  return (
    <div className="expenses">
      <ExpenseFilter handleYearChange={handleYearChange} />
      <ExpenseChart dataByYear={data}/>
      {data.length > 0 ? (
        data.map((item) => <ExpenseItem key={item.uuid} item={item} />)
      ) : (
        <h2>No Expense Item Found</h2>
      )}
    </div>
  );
};

export default ExpenseItemList;
