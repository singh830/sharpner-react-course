import React , { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';


const Expenseitem = (props) => {

    const [title , setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    console.log("ExpenseItem evaluated by React");


    const clickHandler=() =>{
        setTitle('Updated!');
        setAmount(100);
        console.log(title);
    };
       
    return (
        <Card className="expense-item">
            <ExpenseDate  date={props.date}/>   
            <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${amount}</div>
            </div> 
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
    
}

export default Expenseitem;