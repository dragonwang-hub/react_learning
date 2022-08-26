import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initValue = {
    title: "",
    amount: "",
    date: "",
  };

  const [formData, setFormData] = useState(initValue);

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    const values = { ...formData, [name]: value };
    setFormData(values);
  };

  return (
    <div className="new-expense">
      <form
        className="new-expense__controls"
        onSubmit={(event) => {
          setFormData(initValue);
          props.handleSubmit(event, formData);
        }} // 使用onSubmit event应当阻止其事件的默认行为，否则将会在url后增加?符号，导致多次刷新页面
      >
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            className="title"
            id="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            className="amount"
            id="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            className="date"
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
