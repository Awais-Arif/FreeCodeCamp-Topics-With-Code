import React from "react";

export default function ShortCircuitEvaluation() {
  const [text, setText] = React.useState("Awais");
  return (
    <>
      <h1>{text || "john"}</h1>
      {text && <h1>hello world</h1>}
    </>
  );
}
