import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UseUserAuth } from "../context/UserAuth-Context";

const Signup = () => {
  // states and constants
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UseUserAuth();
  let navigate = useNavigate();

  // Sign-Up Submit Function -- onClick
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // render function
  return (
    <>
      <div className="p-4 box rounded">
        <h2 className="mb-3">Registration Page</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="danger" type="Submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>

      <div className="p-4 box mt-3 text-center border-0">
        Already an Existing User? <Link to="/">Sing in</Link>
      </div>
    </>
  );
};

export default Signup;
