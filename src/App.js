import React from 'react';
import ExpenseItemList from './components/ExpenseItemList';
import './App.css';

function App() {
  const data = [{date:"2020.01.01", category: "bus", amount: "1"},
                {date:"2021.01.01", category: "lunch", amount: "16"},
                {date:"2022.01.01", category: "bbq", amount: "128"}]
  return (
    <div className="App">
      <ExpenseItemList data={data}/>
    </div>
  );
}

export default App;
