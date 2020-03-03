import React from "react";
import { Route, Redirect } from "react-router-dom";

function Auth() {
  console.log("ljkjfhfdghjk");
  return false;
}
export default ({ component: Component, ...rest }) => {
  //   console.log(...rest);
  return (
    <Route
      {...rest}
      render={props =>
        Auth() === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
