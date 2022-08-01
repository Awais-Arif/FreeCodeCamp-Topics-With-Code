import React, {useState} from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "maharaj",
    age: "20",
    message: "Hello",
  });
  const changeMessage = () => {
    setPeople({...people, message: "message changed"});
  };
  return (
    <React.Fragment>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
