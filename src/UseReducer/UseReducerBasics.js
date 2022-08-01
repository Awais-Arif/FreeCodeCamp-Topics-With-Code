import React, {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};
const UseReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>{state}</h2>
      <button className="btn" onClick={() => dispatch({type: "increment"})}>
        Inc
      </button>
      <button className="btn" onClick={() => dispatch({type: "decrement"})}>
        Dec
      </button>
    </div>
  );
};

export default UseReducerBasics;
