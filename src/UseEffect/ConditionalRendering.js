import React, {useEffect, useState} from "react";

const url = "http://api.github.com/users/QuincyLarson";
const ConditionalRendering = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          return response.json();
        } else {
          setisLoading(false);
          setisError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};
export default ConditionalRendering;
