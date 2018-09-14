import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    // increment
    case "INCREMENT_COUNT":
      const incrementBy =
        action.payload && typeof action.payload.incrementBy === "number"
          ? action.payload.incrementBy
          : 1;
      return { count: state.count + incrementBy };
    case "DECREMENT_COUNT":
      // decrement
      const decrementBy =
        action.payload && typeof action.payload.decrementBy === "number"
          ? action.payload.decrementBy
          : 1;
      return { count: state.count - decrementBy };
    case "RESET_COUNT":
      //reset
      const resetBy =
        action.payload && typeof action.payload.resetBy === "number"
          ? action.payload.resetBy
          : 0;
      return {
        count: resetBy
      };
    default:
      //default
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT_COUNT"
});

store.dispatch({
  type: "INCREMENT_COUNT",
  payload: {
    incrementBy: 10
  }
});

store.dispatch({
  type: "RESET_COUNT"
});

store.dispatch({
  type: "DECREMENT_COUNT"
});

store.dispatch({
  type: "DECREMENT_COUNT",
  payload: {
    decrementBy: 10
  }
});

store.dispatch({
  type: "RESET_COUNT",
  payload: {
    resetBy: 1000
  }
});

// unsubscribe();
