import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import LoginContext from "../Context/Login";

const Home = (props) => {
  const log = useContext(LoginContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={log.logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
