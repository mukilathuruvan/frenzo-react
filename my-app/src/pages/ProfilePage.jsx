import React from "react";
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
        <h1>You are Not Logged in</h1>
      )}
    </div>
  );
};

export default ProfilePage;
