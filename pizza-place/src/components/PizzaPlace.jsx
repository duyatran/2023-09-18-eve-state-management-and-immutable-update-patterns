import { useState } from "react";
const PizzaPlace = (props) => {

  const [newTopping, setNewTopping] = useState('');
  const [toppings, setToppings] = useState(['cheese', 'sauce']);

  const handleChange = (event) => {
    setNewTopping(event.target.value);
    // setNewTopping(newTopping);
  }

  const handleAddTopping = () => {
    // NEVER DIRECTLY MODIFY STATE
    // toppings.push(newTopping);
    // React does not do deep comparison of objects/arrays;
    // React only compares with === (Object.is()), if it's considered
    // equal, it WILL skip re-rendering
    //
    // always clone, then modify the new array/object
    // spread syntax most popular
    setToppings([...toppings, newTopping]) ; // WRONG
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
        {toppings.map((topping, index) => <li key={index}>{topping}</li>)}
      </ul>

    </section>
  );
}

export default PizzaPlace