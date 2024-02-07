import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";



const Expenses = (props) => {
  const [filteredYear,setfilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

    return (
      <div> 
        <Card className="expenses">
          <ExpensesFilter
          selected ={filteredYear} 
          onChangeFilter={filterChangeHandler} 
          />

        
          
          {filteredExpenses.map((expense) => (
          <Expenseitem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
          />
          ))}

    </Card>
  </div>
    );
}

export default Expenses;