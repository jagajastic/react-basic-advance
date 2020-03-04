import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import menu from "../utils/menu";
import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound";
import About from "../pages/About/index";
import ProtectedRoute from "../utils/ProtectedRoute";
import Services from "../pages/services/index";
import "./style.css";
const Layout = props => {
  const menuItems = JSON.parse(localStorage.getItem("details"));

  return (
    <main>
      <div>
        <ul className="nav-ul">
          {menuItems.isAuth && menuItems.userType === "user"
            ? menu.user.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                );
              })
            : "Not a user"}
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* the protected route didn't work because we are doing this
          
            <ProtectedRoute
            path="/services"
          >
          <Services />
          </ProtectedRoute>
          instead of the below
           */}
          <ProtectedRoute
            path="/services"
            component={Services}
          ></ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default Layout;
