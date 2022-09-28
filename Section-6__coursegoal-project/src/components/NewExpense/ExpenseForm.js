import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
// WORKING WITH MULTIPLE STATE APPROACHES
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

// WORKING WITH ONE STATE OBJECT APPROACHES
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    // Multiple set update
    setEnteredTitle(event.target.value)

    // One state update === INCORRECT WAYS BUT FINE
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // One state update === CORRECT WAYS
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    // Multiple set update
    setEnteredAmount(event.target.value)

    // One state update === INCORRECT WAYS BUT FINE
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // One state update === CORRECT WAYS
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    // Multiple set update
    setEnteredDate(event.target.value)

    // One state update === INCORRECT WAYS BUT FINE
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // One state update === CORRECT WAYS
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(newExpenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const cancelHandler = () => {
    props.onCancel()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            onChange={titleChangeHandler} 
            value={enteredTitle}
            type='text' 
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            onChange={amountChangeHandler} 
            value={enteredAmount}
            type='number' 
            min='0.01' 
            step='0.01' 
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            onChange={dateChangeHandler} 
            value={enteredDate}
            type='date' 
            min='2019-01-01' 
            max='2022-12-31' 
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;