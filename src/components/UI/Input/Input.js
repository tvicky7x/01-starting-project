import React, { useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const InputRef = useRef();

  function activate() {
    InputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return { focus: activate };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={InputRef}
        type={props.type}
        id={props.id}
        value={props.vale}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
