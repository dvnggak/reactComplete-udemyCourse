
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isAddingExpenses, setIsAddingExpenses] = useState(false)

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    setIsAddingExpenses(false)
  };

  const clickHandler = () => {
    setIsAddingExpenses(true)
  }

  const cancelAddingExpenses = () => {
    setIsAddingExpenses(false)
  }

  return (
    <div className='new-expense'>
      {
        isAddingExpenses === false 
          ? <button onClick={clickHandler}>Add New Expenses</button> 
          : <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelAddingExpenses}/>
      }
    </div>
  );
};

export default NewExpense;