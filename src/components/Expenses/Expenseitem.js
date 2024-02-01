import React from 'react';
import ExpenseDate from './ExpenseDate';
import card from '../UI/card';
import './Expenseitem.css';


const Expenseitem = (props) => {
    const clickHandler=() =>{
        console.log('Clicked!!!');
    };
    const deleteHandler=()=>{
        props.onDelete('props.id');
    };
    return (
        <card className="expense-item">
            <ExpenseDate  date={props.date}/>   
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
            </div> 
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete Expense</button>
        </card>
    );
    
}

export default Expenseitem;