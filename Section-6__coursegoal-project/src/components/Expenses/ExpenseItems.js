import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHander = () => {
    setTitle("Updated !!!");
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHander}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
