import "./ExpenseItem.css";

function ExpenseItem(props) {
    const month= props.element.date.toLocaleString('en-US',{month:'long'});
    const day= props.element.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.element.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.element.item}</h2>
        <div className="expense-item__price">${props.element.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
