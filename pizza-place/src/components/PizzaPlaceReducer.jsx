import { useState, useReducer } from "react";
import toppingReducer, {ADD_TOPPING, DELETE_TOPPING} from "../reducers/toppingReducer";

const PizzaPlaceReducer = (props) => {

  const [newTopping, setNewTopping] = useState('');
  // const [toppings, setToppings] = useState(['cheese', 'sauce']);
  const [toppings, dispatch] = useReducer(toppingReducer, ['cheese', 'sauce'])


  const handleChange = (event) => {
    setNewTopping(event.target.value);
    // setNewTopping(newTopping);
  }

  const handleAddTopping = () => {
    // setToppings([...toppings, newTopping]);
    dispatch({type: ADD_TOPPING, payload: newTopping});
  }

  const handleRemoveTopping = (event) => {
    // setToppings(toppings.toSpliced(event.target.value, 1));
    dispatch({type: DELETE_TOPPING, payload: event.target.value})
  }

  return (
    <section>
      <h2>My Pizza Place</h2>
      Please enter a topping:
      <input type="text" onChange={handleChange} value={newTopping}></input>
      <button onClick={() => handleAddTopping()}>Add topping</button>

      <p>New topping: {newTopping}</p>

      <h3> Requested toppings </h3>

      <ul>
        {toppings.map((topping, index) =>
          <li key={index}>
            {topping}
            <button value={index} onClick={(e) => handleRemoveTopping(e)}>Remove topping</button>
          </li>)}
      </ul>

    </section>
  );
}

export default PizzaPlaceReducer;