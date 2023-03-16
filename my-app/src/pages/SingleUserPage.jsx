import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUserPage = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params?.id]);
  console.log(params);
  return (
    <div>
      <h1>SingleUserPage - {params?.id}</h1>
      <h2>Name : {user?.name}</h2>
      <h2>Email : {user?.email}</h2>
      <h2>Username : {user?.username}</h2>
    </div>
  );
};

export default SingleUserPage;
