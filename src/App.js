import ExpenseItem from "./components/ExpenseItem";

function App(){
  const expenses = [
    {
      item: 'Grocery',
      date: new Date(2018, 5, 19),
      amount: 100
    },
    {
      item: 'Car',
      date: new Date(2020, 1, 26),
      amount: 2000
    },
    {
    item: 'PS5',
    date: new Date(2023, 2, 20),
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