import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginContext from "./components/Context/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
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
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </LoginContext.Provider>
  );
}

export default App;
