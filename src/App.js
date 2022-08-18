import React from "react";
import ExpenseItemList from "./components/ExpenseItemList";
import "./App.css";

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
  return (
    <div className="App">
      <ExpenseItemList data={data} />
    </div>
  );
}

export default App;
