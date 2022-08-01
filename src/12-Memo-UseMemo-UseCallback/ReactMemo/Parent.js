import React, {useState} from "react";
import {MemoizedChild} from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("shiv");
  console.log("parent is rendered");
  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count
      </button>
      <button className="btn" onClick={() => setName("maharaj")}>
        Change Name
      </button>
      <MemoizedChild name={name} />
    </div>
  );
};

export default Parent;
