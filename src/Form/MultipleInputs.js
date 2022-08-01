import React, {useState} from "react";

const MultipleInputs = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName: "", email: "", age: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({firstName: "", email: "", age: ""});
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label style={{fontSize: "15px"}} htmlFor="firstName">
              Name :
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />

            {/* <label
              style={{fontSize: "1rem", marginTop: "1rem"}}
              htmlFor="Email"
            >
              Email :
            </label>
            <input
              style={{marginTop: "1rem"}}
              type="text"
              id="Email"
              name="Email"
            /> */}
          </div>
          <div className="form-control">
            <label style={{fontSize: "15px"}} htmlFor="email">
              Email :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label style={{fontSize: "15px"}} htmlFor="amail">
              Age :
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>

        {people.map((person) => {
          const {id, firstName, email, age} = person;
          return (
            <div key={id} className="item" style={{fontSize: "1rem"}}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};
export default MultipleInputs;
