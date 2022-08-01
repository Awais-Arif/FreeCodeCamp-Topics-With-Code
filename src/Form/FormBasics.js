import React, {useState} from "react";

const FormBasics = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {id: new Date().getTime().toString(), firstName, email};
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty input");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label style={{fontSize: "15px"}} htmlFor="firstName">
              Name :
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
            <label style={{fontSize: "15px"}} htmlFor="Email">
              Email :
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>

        {people.map((person) => {
          const {id, firstName, email} = person;
          return (
            <div key={id} className="item" style={{fontSize: "1rem"}}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default FormBasics;
