import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 20th 2023</div>
      <div className="expense-item__description">
        <h2>Grocery</h2>
        <div className="expense-item__price">$599</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
