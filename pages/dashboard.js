import Link from 'next/link';
import styles from './Dashboard.module.css';
import IncomeForm from '../components/IncomeForm';

function Dashboard() {
//   const handleIncomeSubmit = (incomeData) => {
//     console.log('Income Data Submitted:', incomeData);
//   };
  
  return (
    <div className={styles.container}>
      <h1>Budgeting Dashboard</h1>

      <div className={styles.overview}>
        {/* fetch and display income/expense summary data here */}
      </div>
      
      {/* <IncomeForm onSubmitIncome={handleIncomeSubmit} />  */}

      <nav className={styles.actions}>
      <Link href="/income">
        <button className={styles.button}>Add Income</button>
      </Link>
      <Link href="/expense">
        <button className={styles.button}>Add Expense</button>
      </Link>
      </nav>
    </div>
  );
}

export default Dashboard;
