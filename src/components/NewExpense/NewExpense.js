import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false); 
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveDataExpenseHandler} onCancel ={stopEditingHandler}/>}
    </div>
    
};

export default NewExpense;