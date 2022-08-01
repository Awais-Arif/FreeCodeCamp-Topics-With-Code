import React, {useState} from "react";

const ComplexCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{margin: "4rem 0"}}>
        <h3>Regular Counter</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>

        <section style={{margin: "4rem 0"}}>
          <h3>Complex Counter</h3>
          <h1>{value}</h1>
          <button className="btn" onClick={complexIncrease}>
            Increase Later
          </button>
        </section>
      </section>
    </>
  );
};
export default ComplexCounter;
