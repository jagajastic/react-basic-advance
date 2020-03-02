import React from "react";

import menu from "../utils/menu";

const Layout = () => {
  return (
    <main>
      <div>
        <ul>
          {menu.user.map(item => {
            return (
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </main>
  );
};

export default Layout;
