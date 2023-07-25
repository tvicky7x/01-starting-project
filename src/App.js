import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginContext from "./components/Context/Login";

function App() {
  const log = useContext(LoginContext);
  return (
    <>
      <MainHeader />
      <main>
        {!log.isLoggedIn && <Login />}
        {log.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
