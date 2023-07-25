import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
});

export default LoginContext;
