import React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <React.Fragment>
      <label className={classes.Label}>{props.label}</label>
      <input
        className={classes.Input}
        onChange={props.changed}
        {...props.elementConfig}
        value={props.value}
      />
    </React.Fragment>
  );
};

export default Input;
