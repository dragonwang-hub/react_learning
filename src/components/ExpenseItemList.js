import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

const ExpenseItemList = (props) => {
  return (
    <div className="expenses">
      {props.data.map((item) => (
        <ExpenseItem item={item} />
      ))}
    </div>
  );
};

export default ExpenseItemList;
