import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Users;
