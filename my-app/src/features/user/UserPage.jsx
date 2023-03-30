import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../../api/userApi";

const UserPage = () => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.user);
  console.log(value);
  useEffect(() => {
    dispatch(userThunk());
  }, []);
  return <div>UserPage</div>;
};

export default UserPage;
