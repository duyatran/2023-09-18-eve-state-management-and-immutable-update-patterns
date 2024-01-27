import { useState } from 'react';
import { useReducer } from 'react';
import toppingObjReducer, {ADD_TOPPING, REMOVE_TOPPING }  from '../reducers/toppingObjReducer';

const PizzaPlaceWithObjStateReducer = (props) => {
    const [newTopping, setNewTopping] = useState('');
    const [pizza, dispatch] = useReducer(toppingObjReducer, {
        price: 10,
        toppings: ['cheese']
    });

    const handleChange = (event) => {
        setNewTopping(event.target.value);
    };

    const handleAddTopping = () => {
        dispatch({ type: ADD_TOPPING, payload: newTopping });
    };

    const handleRemoveTopping = (event) => {
        dispatch({ type: REMOVE_TOPPING, payload: event.target.value });
    }

    return (
      <section>
        <h2>My Pizza Place</h2>
        Please enter a new topping:
        <input type="text" onChange={handleChange} value={newTopping} />
        <button onClick={() => handleAddTopping()}>Add new topping</button>

        <p>New Topping: {newTopping}</p>
        <h3>Requested Toppings:</h3>
        <ul>
          {pizza.toppings.map((topping, index) => {
            return (
              <>
                <li key={index}>
                  {topping}
                  <button value={index} onClick={(e) => handleRemoveTopping(e)}>
                    Remove topping
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    );
};

export default PizzaPlaceWithObjStateReducer;