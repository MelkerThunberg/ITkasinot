//import React from 'react';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const postLogin = ({ username, password }) =>
  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

export default function Login() {
  const { refetch: refetchUser } = useCurrentUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ success, authToken, message }) => {
      if (success) {
        // set cookies
        document.cookie = `authToken=${authToken}`;
        await refetchUser();
        navigate("/");
      } else {
        alert(message);
      }
    },
  });

  return (
    <div>
      <h1>Logga in</h1>
      <Link to="/register">Registrera konto</Link>
      <br />

      <label htmlFor="username">Användarnamn</label>
      <input
        id="username"
        name="username"
        placeholder="Username"
        className="input"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <label htmlFor="password">Lösenord</label>
      <input
        id="password"
        name="password"
        placeholder="Password"
        className="input"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button
        onClick={() => mutate({ username, password })}
        className="login-form-button"
      >
        Log in
      </button>
    </div>
  );
}
