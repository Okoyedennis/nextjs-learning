import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }
  return <button className={styles.btn} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
