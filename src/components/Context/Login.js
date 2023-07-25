import React, { useState, useEffect } from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
  loginHandler: () => {},
});

export function LoginContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("login", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("login", "0");
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logoutHandler: logoutHandler,
        loginHandler: loginHandler,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
