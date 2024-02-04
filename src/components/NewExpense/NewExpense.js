import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveDataExpenseHandler}/>
    </div>
    
};

export default NewExpense;