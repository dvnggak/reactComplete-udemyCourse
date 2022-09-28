import React from "react"
import ExpenseItems from "./ExpenseItems"
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.filter.length === 0) {
        return <h2 className="expenses-list__fallback"> No Expenses Found !!</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.filter.map((items) => (
                    <ExpenseItems 
                        key={items.id}
                        title={items.title} 
                        amount={items.amount} 
                        date={items.date} 
                    /> 
                    )
                )
            }
        </ul>
    )
}

export default ExpensesList