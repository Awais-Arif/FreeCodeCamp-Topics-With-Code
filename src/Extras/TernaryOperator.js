import React, {useState} from "react";

export default function TernaryOperator() {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false);
  return (
    <>
      <h1>{text || "john"}</h1>
      <button className="btn" onClick={() => setisError(!isError)}>
        Toogle Error
      </button>
      {isError && <h1>Error...</h1>}

      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
}
