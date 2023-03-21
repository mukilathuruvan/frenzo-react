import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const initial = [
  { id: 1, name: "ragnar", active: true },
  { id: 2, name: "floki", active: true },
  { id: 3, name: "lagertha", active: false },
  { id: 4, name: "bjgron", active: true },
  { id: 5, name: "aley", active: false },
];

const UserParams = () => {
  const [users, setUsers] = useState(initial);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <button
        onClick={() => {
          setSearchParams({});
          setUsers(initial);
        }}>
        Show All Users
      </button>
      <button
        onClick={() => {
          setSearchParams({ active: true });
          setUsers(
            initial.filter((user) => user.active === searchParams?.active)
          );
        }}>
        Show Active Users
      </button>

      <ul>
        {users.map((user) => (
          <h1>{user.name}</h1>
        ))}
      </ul>
    </div>
  );
};

export default UserParams;
