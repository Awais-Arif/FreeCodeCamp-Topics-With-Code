import React, {useEffect, useState} from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  console.log("render");
  return (
    <>
      <h2>Window</h2>
      <h2>{size} PX</h2>
    </>
  );
};
export default UseEffectCleanup;

//cleanup is good for conditional rendering. when components are appearing and disappearing
