const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // return state.concat(action.expense);
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(exp => {
        if (exp.id === action.id) {
          const updatedExp = {
            ...exp,
            ...action.updates
          };
          return updatedExp;
        }
        return exp;
      });
    default:
      return state;
  }
};

export default expenseReducer;
