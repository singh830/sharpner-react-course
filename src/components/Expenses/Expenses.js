
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";



const Expenses = (props) => {
  const [filteredYear,setfilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <div> 
        <Card className="expenses">
          <ExpensesFilter
          selected ={filteredYear} 
          onChangeFilter={filterChangeHandler} 
          />
          <ExpensesChart expenses = {filteredExpenses} />
          <ExpensesList items={filteredExpenses}/>
    </Card>
  </div>
    );
}

export default Expenses;