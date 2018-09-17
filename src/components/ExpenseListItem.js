import React from "react";

import { Link } from "react-router-dom";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt
}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {note} - {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
