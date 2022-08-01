import React from "react";

const Child = () => {
  console.log("child is rendered");
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};

export default Child;
export const MemoizedChild = React.memo(Child);
