import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

function Auth() {
  return { isAuth: false, userType: "user" };
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const Menu = Auth();
  rest.men = Menu;

  return (
    <Route
      {...rest}
      render={props => {
        if (Auth().isAuth) {
          localStorage.setItem("details", JSON.stringify(Auth()));
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
