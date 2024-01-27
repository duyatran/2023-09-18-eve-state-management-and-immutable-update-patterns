export const ADD_TOPPING = 'ADD_TOPPING';
export const REMOVE_TOPPING = 'REMOVE_TOPPING';

const toppingObjReducer = (state, action) => {
  switch (action.type) {
    case ADD_TOPPING:
      return {
        ...state,
        toppings: [...state.toppings, action.payload]
      };

    case REMOVE_TOPPING:
      return {
        ...state,
        toppings: state.toppings.toSpliced(action.payload, 1)
      };

    default:
      throw new Error(`Err: the action type ${action.type} is not supported`);
  }
};

export default toppingObjReducer;