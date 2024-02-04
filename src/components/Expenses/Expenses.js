import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";



const Expenses = (props) => {
  const [filteredYear,setfilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
  }

    return (
        <Card className="expenses">
          <ExpensesFiltered selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFiltered>;
          <Expenseitem 
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date} 
          />
          <Expenseitem 
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date} 
          />
          <Expenseitem 
            title={props.items[2].title}
            amount={props.items[2].amount} 
            date={props.items[2].date} 
          />
          <Expenseitem 
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date} 
          />
    </Card>
    );
}

export default Expenses;