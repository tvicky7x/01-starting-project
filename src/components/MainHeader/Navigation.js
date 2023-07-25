import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import LoginContext from "../Context/Login";

const Navigation = (props) => {
  const log = useContext(LoginContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {log.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {log.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {log.isLoggedIn && (
          <li>
            <button onClick={log.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
