import React, {useState} from "react";

function Setup() {
  const [text, setText] = useState("Random title");
  const handleClick = () => {
    setText("Hello World");
    if (text === "Hello World") {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
}

export default Setup;
