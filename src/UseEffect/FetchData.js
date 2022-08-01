import React, {useEffect, useState} from "react";

const url = "http://api.github.com/users";
const FetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Fetch Data</h3>

      <ul className="users">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4 style={{marginBottom: "-10px"}}>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
