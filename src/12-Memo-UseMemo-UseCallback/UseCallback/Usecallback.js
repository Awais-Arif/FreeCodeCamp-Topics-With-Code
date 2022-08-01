import React, {useState, useCallback, useMemo} from "react";
import List from "./List";
const Usecallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  // useCallback checks if the whole function is changing or not and then it renders the component

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default Usecallback;
