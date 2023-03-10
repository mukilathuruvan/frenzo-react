import React from "react";
import { useAuth } from "../../context/ExpenceContext";
import Single from "./Single";

const History = () => {
  const { history } = useAuth();
  return (
    <ul>
      {history?.map((tranc) => (
        <Single tranc={tranc} key={tranc.id} />
      ))}
    </ul>
  );
};

export default History;
