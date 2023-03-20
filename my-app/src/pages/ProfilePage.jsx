import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const ProfilePage = () => {
  const { logout, currentUser } = useUserContext();

  return (
    <div>
      {currentUser ? (
        <>
          <h1>Welcome {currentUser.userName}</h1>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
};

export default ProfilePage;
