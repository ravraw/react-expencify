import moment from "moment";

const expenses = [
  {
    id: 0,
    description: "expense number one",
    note: "note for expense 1",
    amount: 1000,
    createdAt: 0
  },
  {
    id: 0,
    description: "expense number two",
    note: "note for expense 2",
    amount: 1200,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: 0,
    description: "expense number three",
    note: "note for expense 3",
    amount: 800,
    createdAt: moment(0)
      .add(8, "days")
      .valueOf()
  },
  {
    id: 0,
    description: "expense number four",
    note: "note for expense 4",
    amount: 1500,
    createdAt: moment(0)
      .add(10, "days")
      .valueOf()
  }
];

export default expenses;
