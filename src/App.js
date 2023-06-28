import ExpenseItem from "./components/ExpenseItem";

function App(){
  const expenses = [
    {
      item: 'Grocery',
      date: new Date(26, 1, 2019),
      amount: 100
    },
    {
      item: 'Car',
      date: new Date(1, 1, 2020),
      amount: 2000
    },
    {
    item: 'PS5',
    date: new Date(2, 2, 2023),
    amount: 1000
    }
  ];
  return(
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem element={expenses[0]}/>
      <ExpenseItem element={expenses[1]}/>
      <ExpenseItem element={expenses[2]}/>
    </div>
  );
}

export default App;