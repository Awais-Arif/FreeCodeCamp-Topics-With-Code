import React, {useState} from "react";
import {data} from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const RemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => RemoveItem(id)}>Remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
