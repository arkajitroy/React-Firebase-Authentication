import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UseUserAuth } from "../context/UserAuth-Context";

const Home = () => {
  // states and constants
  const { user, logOut } = UseUserAuth();
  let navigate = useNavigate();

  // Log-out function
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <>
        <div className="p-4 box mt-3 text-center">
          <h3>Welcome to our website 😄🎉</h3>
          <p>You have successfully entered into our homepage.</p>
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button variant="danger" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </>
    </div>
  );
};

export default Home;
