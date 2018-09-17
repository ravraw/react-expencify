import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const now = moment();

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      description: this.props.expense.description || "",
      note: this.props.expense.note || "",
      amount: (this.props.expense.amount / 100).toString() || "",
      createdAt: moment(this.props.expense.createdAt) || moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  onNoteChange = e => {
    this.setState({ note: e.target.value });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount"
      }));
    } else {
      this.setState(() => {
        error: "";
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render(props) {
    console.log(this.props);
    return (
      <div>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Expense"
            value={this.state.description}
            autoFocus
            onChange={e => this.onDescriptionChange(e)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={e => this.onAmountChange(e)}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            name="note"
            id=""
            cols="30"
            rows="1"
            placeholder="Note for your expense (optional)"
            value={this.state.note}
            onChange={e => this.onNoteChange(e)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
