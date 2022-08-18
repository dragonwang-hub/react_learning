import React from "react";

const ExpenseItem = (props) => {
    return (
        <div className="item">
            This is life
            <a className="date">{props.item.date}</a>
            <a className="category">{props.item.category}</a>
            <a className="amount">{props.item.amount}</a>
        </div>
    )
}

export default ExpenseItem;