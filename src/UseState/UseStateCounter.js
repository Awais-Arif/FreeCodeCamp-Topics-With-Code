import React, {useState} from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <section style={{margin: "4rem 0"}}>
      <h3>Regular Counter</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
    </section>
  );
};

export default UseStateCounter;
