import React from 'react';
import ReactDOM from 'react-dom/client';
import PizzaPlaceWithObjStateReducer from './components/PizzaPlaceObjReducer';
// import SayHello from './components/SayHello';
// import Counter from './components/Counter';
// import PizzaPlace from './components/PizzaPlace';
// import PizzaPlaceReducer from './components/PizzaPlaceReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <SayHello name="Gloria" occupation="dev"></SayHello> */}
    {/* SayHello({name: "Gloria", occupation: ""}) */}
    {/* <Counter></Counter> */}
    {/* <PizzaPlace></PizzaPlace> */}
    {/* <PizzaPlaceReducer></PizzaPlaceReducer> */}
    <PizzaPlaceWithObjStateReducer></PizzaPlaceWithObjStateReducer>
  </React.StrictMode>
);
