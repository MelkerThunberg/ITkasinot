import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Importera CSS-filen för Navbar-stilen
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function Navbar() {
  const { user, logout } = useCurrentUser();
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">ItKasinot</Link>
          </li>
          <li>
            <Link to="/blackjack">BlackJack</Link>
          </li>
          <li>
            <Link to="/blackjack2.0">BlackJack2.0</Link>
          </li>
          <li>
            <Link to="/coinflip">Singla Slant</Link>
          </li>
          <li>
            <Link to="/dailybonus">Daglig Bonus</Link>
          </li>
          <li>
            <Link to="/caseUnbox">Öppna lådor</Link>
          </li>
          <li>
            <Link to="/roulette">Roulette</Link>
          </li>
          <li>
            <Link to="/plinko">Plinko</Link>
          </li>
        </ul>
        <div className="balance">{user?.balance || 0}$</div>
        <div className="username">{user?.username}</div>
        <button className="logout-button" onClick={logout}>
          Logga ut
        </button>
      </div>
    </nav>
  );
}
