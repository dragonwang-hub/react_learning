import React from "react";
import { NavLink } from "react-router-dom";
import "./ExpenseLink.css";

const ExpenseLink = () => {
  return (
    <div className="nav-bar">
      <strong className="title">My Expense</strong>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/expenses"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "red",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            All expenses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-expense"
            className={({ isActive }) => (isActive ? "selected" : "origin")}
          >
            {" "}
            Add new expense
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ExpenseLink;
