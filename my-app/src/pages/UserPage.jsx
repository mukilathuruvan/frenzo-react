import connect from "../context/connect";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await connect.get("/users");
      setUsers(data);
    };
    getUser();
  }, []);

  const handleDelete = async () => {
    const response = await connect.delete("/users/3");
    console.log(response);
  };

  const handleUpdate = async () => {
    const response = await connect.put("/users/2", {
      name: "mukil updated",
      course: 301,
    });
    console.log(response);
  };

  const handlePost = async () => {
    const response = await connect.post("/users", { id: 3, name: "ragnar", course: 205 });
    console.log(response);
  };
  return (
    <div>
      {/* <h1>hello this is welcome</h1>
      <h1>hello this is welcome</h1>
      <h1>hello this is welcome</h1>
      <h1>hello this is welcome</h1>
      <h1>hello this is welcome</h1> */}
      <ul>
        {users.map((user) => (
          <li key={user?.id}>
            <Link to={`/users/${user?.id}`}>{user?.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete User</button>
      <button onClick={handleUpdate}>Update User</button>
      <button onClick={handlePost}>Add user</button>
    </div>
  );
};

export default UserPage;
