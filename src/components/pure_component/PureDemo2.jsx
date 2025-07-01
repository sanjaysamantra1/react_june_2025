import React, { useState } from "react";

// By default every functional componet is pure component
export default function PureDemo2() {
  const [name, setName] = useState("virat");

  const updateName = () => {
    // setName("virat");
    setName("sachin");
  };

  return (
    <>
      {console.log("Render...")}
      <h3>Pure Component Example</h3>
      <div>Name is:{name}</div>
      <button onClick={updateName}>Update Name</button>
    </>
  );
}
