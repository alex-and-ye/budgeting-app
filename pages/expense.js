import ExpenseForm from '../components/ExpenseForm';

function ExpensesPage() {
  const categories = ['Food', 'Rent', 'Entertainment', 'Transportation', 'Tuition', 'Other']; // Example

  return (
    <div>
      <h1>Expenses Input</h1>
      <ExpenseForm categories={categories} />
    </div>
  );
}

export default ExpensesPage;
