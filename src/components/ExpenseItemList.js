import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItemList = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [data, setData] = useState([]);

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  useEffect(() => {
    console.log("current selected year is:", selectedYear);
    setData(props.data.filter((item) => item.date.year == selectedYear));
  }, [selectedYear]);

  return (
    <div className="expenses">
      <ExpenseFilter handleYearChange={handleYearChange} />
      {data.length > 0 ? (
        data.map((item) => <ExpenseItem key={item.uuid} item={item} />)
      ) : (
        <h2>No Expense Item Found</h2>
      )}
    </div>
  );
};

export default ExpenseItemList;
