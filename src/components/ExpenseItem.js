import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.element.date}/>
      <div className="expense-item__description">
        <h2>{props.element.item}</h2>
        <div className="expense-item__price">${props.element.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
