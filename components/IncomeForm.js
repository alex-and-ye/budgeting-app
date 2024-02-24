import React, { useState, useEffect } from 'react';
import styles from './IncomeForm.module.css';

function IncomeForm({ onSubmitIncome }) { 
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [incomeFrequency, setIncomeFrequency] = useState('weekly'); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const incomeData = {
      amount: +incomeAmount, // Convert to number
      source: incomeSource,
      frequency: incomeFrequency
    };

    // Store in local storage
    const storedData = JSON.parse(localStorage.getItem('incomeData')) || []; // Initialize with empty array
    storedData.push(incomeData);
    localStorage.setItem('incomeData', JSON.stringify(storedData));

    // Log to console directly
    console.log('Income Data:', incomeData);
    // Reset form fields
    setIncomeAmount('');
    setIncomeSource(''); 
    setIncomeFrequency('weekly'); // Reset to default
  };
  // Load data on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('incomeData')) || [];
    }, []); 

  return (
    <form onSubmit={handleSubmit} className={styles.form}> 
      <div className={styles.control}>
        <label htmlFor="incomeAmount">Income Amount($):</label>
        <input 
          type="number" 
          id="incomeAmount" 
          min="1" 
          step="1" 
          value={incomeAmount} 
          onChange={(e) => setIncomeAmount(e.target.value)} 
          required
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="incomeSource">Income Source:</label>
        <input 
          type="text" 
          id="incomeSource" 
          value={incomeSource} 
          onChange={(e) => setIncomeSource(e.target.value)} 
          required
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="frequency">Frequency:</label>
        <select 
          id="frequency" 
          value={incomeFrequency} 
          onChange={(e) => setIncomeFrequency(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="biweekly">Bi-Weekly</option> 
          {/* More options required */}
        </select>
      </div>
      <button className={styles.actions}>Add Income</button>
    </form>
  );
}

export default IncomeForm;
