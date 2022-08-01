import React, {useEffect, useState} from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  console.log("render component");
  return (
    <>
      <h2>Counter</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};
export default UseEffectBasics;
