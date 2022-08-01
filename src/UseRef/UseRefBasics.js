import React, {useRef, useEffect} from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    refContainer.current.value = null;
    // console.log(divContainer.current);
  };

  useEffect(() => {
    console.log("1st item");
    console.log(refContainer.current);
    refContainer.current.focus(); //when we render component focus is on input.
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
