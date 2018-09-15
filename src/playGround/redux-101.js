import { createStore } from "redux";

// ACTION GENERATORS

const incrementCount = (incrementBy = 1) => ({
  type: "INCREMENT_COUNT",
  incrementBy
});
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT_COUNT",
//   incrementBy
// });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT_COUNT",
  decrementBy
});

const resetCount = ({ resetBy = 0 } = {}) => ({ type: "RESET_COUNT", resetBy });

//REDUCER

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT_COUNT":
      return { count: state.count - action.decrementBy };
    case "RESET_COUNT":
      return { count: action.resetBy };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount(10));
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount({ resetBy: 1000 }));
