const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      console.log(expense.createdAt, text, sortBy, startDate, endDate);
      const startDateMatch = expense.createdAt >= startDate;
      const endDateMatch = expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text);
      console.log(startDateMatch, endDateMatch, textMatch);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
