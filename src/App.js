import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Scissors (Singer)",
    amount: 29.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Nike Hypervenom Soccer Cleats",
    amount: 32.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Television (Sony LED)",
    amount: 615.41,
    date: new Date(2022, 1, 20),
  },
  {
    id: "e6",
    title: "Laptop (HP ProBook)",
    amount: 352.41,
    date: new Date(2022, 5, 19),
  },
  {
    id: "e7",
    title: "Pants (Sir Georges)",
    amount: 52.41,
    date: new Date(2022, 8, 10),
  },
  {
    id: "e8",
    title: "Headphone (P47 wireless)",
    amount: 423.41,
    date: new Date(2023, 2, 20),
  },
  {
    id: "e7",
    title: "Shaver",
    amount: 22.30,
    date: new Date(2023, 4, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
