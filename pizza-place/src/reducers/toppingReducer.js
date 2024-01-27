export const ADD_TOPPING = 'ADD_TOPPING';
export const DELETE_TOPPING = 'DELETE_TOPPING';

// given an initial state, and an action, apply that action on the state
// and return the resulting state
const toppingReducer = (toppings, action) => {
  switch (action.type) {
    case ADD_TOPPING:
      return [...toppings, action.payload]; // new topping
    case DELETE_TOPPING:
      return toppings.toSpliced(action.payload, 1);
    default:
      throw new Error("Action not defined");
  }
}

export default toppingReducer;