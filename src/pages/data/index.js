import React from "react";

export default props => {
  return <div onClick={() => props.call("hjkl")}>{props.item}</div>;
};
