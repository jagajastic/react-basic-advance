import React, { useState } from "react";
import Data from "../data/index";

export default () => {
  const [state, setState] = useState("Current item");
  const handleChange = item => {
    setState(item);
  };

  return (
    <>
      <Data item={state} call={handleChange} />
      <p>
        {console.log("new state", state)}
        <span>Hello home </span>
      </p>
    </>
  );
};
