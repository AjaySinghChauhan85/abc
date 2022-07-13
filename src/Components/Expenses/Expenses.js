import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onchangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;