import React from "react";
import "./ItemDate.css";

const ItemDate = (props) => {
  return (
    <div className="expense-date">
      <span className="expense-date__month">{props.date.month}</span>
      <span className="expense-date__year">{props.date.year}</span>
      <span className="expense-date__day">{props.date.day}</span>
    </div>
  );
};

export default ItemDate;
