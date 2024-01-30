import './Expenseitem.css';

function Expenseitem() {
    const expenseDate = new Date(2024,2,2029); 
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.70;
    const LocationOfExpenditure = 'Grocery Store';
    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString}</div>;
        <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        <p>Location: {LocationOfExpenditure}</p>    
    </div>
    );
    
}

export default Expenseitem;