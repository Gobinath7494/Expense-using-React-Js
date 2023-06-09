import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <ExpenseDetails
        LocationOfExpenditure={props.LocationOfExpenditure}
      ></ExpenseDetails> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
