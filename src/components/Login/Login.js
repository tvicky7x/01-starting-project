import React, { useContext, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import LoginContext from "../Context/Login";
import Input from "../UI/Input/Input";

function emailHandler(state, action) {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "BLUR_FIELD") {
    return { val: state.val, isValid: state.val.includes("@") };
  }
  return { val: "", isValid: false };
}

function passwordHandler(state, action) {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "BLUR_FIELD") {
    return { val: state.val, isValid: state.val.trim().length > 6 };
  }
  return { val: "", isValid: false };
}

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailHandler, {
    val: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordHandler, {
    val: "",
    isValid: null,
  });

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "BLUR_FIELD" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "BLUR_FIELD" });
  };

  const log = useContext(LoginContext);

  const EmailRef = useRef();
  const PasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailValid && passwordValid) {
      log.loginHandler(emailState.val, passwordState.val);
    } else if (!emailValid) {
      EmailRef.current.focus();
    } else {
      PasswordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={EmailRef}
          type={"email"}
          id={"email"}
          value={emailState.val}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailValid}
          label={"E-mail"}
        ></Input>
        <Input
          ref={PasswordRef}
          type={"password"}
          id={"password"}
          value={passwordState.val}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordValid}
          label={"Password"}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
