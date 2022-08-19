import React from "react";
import ItemDate from "./ItemDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <a>
        <ItemDate date={props.item.date} />
      </a>
      <a className="expense-item__description">
        <h2>{props.item.category}</h2>
      </a>
      <a className="expense-item__price">${props.item.amount}</a>
    </div>
  );
};

export default ExpenseItem;
