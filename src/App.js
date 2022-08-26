import React, { useState } from "react";
import ExpenseItemList from "./components/ExpenseItemList";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const data = [
    {
      uuid: "1",
      date: { year: "2020", month: "Dec", day: "12" },
      category: "bus",
      amount: "1",
    },
    {
      uuid: "2",
      date: { year: "2021", month: "Aug", day: "08" },
      category: "lunch",
      amount: "16",
    },
    {
      uuid: "3",
      date: { year: "2022", month: "May", day: "05" },
      category: "gasline",
      amount: "200",
    },
  ];
  const [allData, setAllData] = useState(data);

  const newExpenseMapToExpense = (newExpense) => {
    const date = newExpense.date.split("-");
    return {
      uuid: uuidv4(),
      date: {
        year: date[0],
        month: date[1],
        day: date[2],
      },
      category: newExpense.title,
      amount: newExpense.amount,
    };
  };

  const handleFormSubmit = (event, newExpense) => {
    event.preventDefault();
    const list = [newExpenseMapToExpense(newExpense), ...allData];
    setAllData(list);
  };

  return (
    <div className="App">
      <ExpenseForm handleSubmit={handleFormSubmit} />
      <ExpenseItemList data={allData} />
    </div>
  );
}

export default App;
