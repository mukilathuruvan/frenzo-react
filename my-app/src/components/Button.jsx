import React from "react";
import styles from "../style/button.module.css";

const Button = ({ children }) => {
  return <button className={styles.primary}>{children}</button>;
};

export default Button;
