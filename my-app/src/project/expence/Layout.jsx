import React from "react";
import Balance from "./Balance";
import Form from "./Form";
import History from "./History";
import "./exp.css";
import { useAuth } from "../../context/ExpenceContext";
const Layout = () => {
  const { balance } = useAuth();
  let { income, expence, total } = balance;
  return (
    <div>
      <Balance header={"Total"} amount={total} />
      <Balance header={"Income"} amount={income} />
      <Balance header={"Expence"} amount={expence} />
      <History />
      <Form />
    </div>
  );
};

export default Layout;
