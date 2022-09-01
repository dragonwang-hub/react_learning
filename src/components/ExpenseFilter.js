import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const handleChange = (event) => {
    props.handleYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select name="year" id="year" onChange={handleChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
