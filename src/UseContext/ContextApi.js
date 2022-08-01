import React, {useState, useContext} from "react";
import {data} from "../data";

const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>UseContext/ContextApi</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <DataItems key={person.id} {...person} />;
      })}
    </>
  );
};

const DataItems = ({id, name}) => {
  const {removePerson} = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default ContextApi;
