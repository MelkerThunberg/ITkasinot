//import React from 'react';

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const postRegister = ({ username, password }) =>
  fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: postRegister,
    onSuccess: ({ success, message }) => {
      if (success) {
        navigate("/login");
        alert("Registrering lyckades!");
      } else {
        alert(message);
      }
    },
  });

  return (
    <div>
      <h1>Registrera konto</h1>
      <Link to="/login">Logga in</Link>
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
      <button onClick={() => mutate({ username, password })}>Registrera</button>
    </div>
  );
}
