// pages/index.js
"use client"

import { useState, useRef } from 'react';
//import { text } from 'stream/consumers';

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const descriptionRef = useRef()

  const addExpense = () => {
    if (name && amount) {
      setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
      setName('');
      setAmount('');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <>
    <div className='flex bg-white'>
    <div className='flex items-center bg-white mx-auto px-2'>
    <nav className='flex items-center bg-white text-slate-900 px-4 py-2 font-bold'>Hello, User!</nav>
    </div>
    </div>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl bg-slate-800 font-semibold text-center mb-6">Expense Tracker</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expenseName">
              Expense Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expenseName"
              type="text"
              name='description'
              placeholder="enter the expense name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={descriptionRef}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expenseAmount">
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expenseAmount"
              type="number"
              placeholder="enter the amount spent"
              value={amount}
              name={amount}
              min={1}
              step={1}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addExpense}
          >
            Add Expense
          </button>
        </div>
        <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-800">{expense.name}: ₹{expense.amount}</span>
              <button
                className="text-red-400 hover:text-red-800 focus:outline-none focus:text-red-700"
                onClick={() => deleteExpense(index)}
                required
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
