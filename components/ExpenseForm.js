import React, { useState, useEffect} from 'react';
import styles from './ExpenseForm.module.css';

function ExpenseForm({ categories, onSubmitExpense }) {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseCategory, setExpenseCategory] = useState(categories[0]); // Default to first category

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      amount: +expenseAmount, // Convert to number
      description: expenseDescription,
      category: expenseCategory
    };

    // Store in local storage
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    storedData.push(expenseData);
    localStorage.setItem('expenseData', JSON.stringify(storedData));

    // onSubmitExpense(expenseData); // Pass data to parent component
    
    // Clear form fields after submission
    setExpenseAmount('');
    setExpenseDescription('');
    setExpenseCategory(categories[0]);
  };
  // Load data on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    }, []); 

  return (
    <form onSubmit={handleSubmit} className={styles.form}> 
      <div className={styles.control}>
        <label htmlFor="expenseAmount">Amount ($)</label>
        <input 
            type="number" 
            id="expenseAmount" 
            min="1" 
            step="1" 
            value={expenseAmount} 
            onChange={(e) => setExpenseAmount(e.target.value)} 
            required
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="expenseDescription">Description</label>
        <input 
            type="text" 
            id="expenseDescription" 
            value={expenseDescription} 
            onChange={(e) => setExpenseDescription(e.target.value)} 
            required
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="category">Category</label>
        <select 
            id="category" 
            value={expenseCategory} 
            onChange={(e) => setExpenseCategory(e.target.value)}
        >
          {categories.map(category => (
              <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <button className={styles.actions}>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
