import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"; // Importera CSS-filen för Navbar-stilen

function Navbar() {
    return (
        <div>
        <nav className="navbar-container">
            <div className="navbar">
                <h1>ItKasinot</h1>
                <ul className="navbar-links">
                    <li><Link to="/blackjack">BlackJack</Link></li>
                    <li><Link to="/coinflip">Singla Slant</Link></li>
                    <li><Link to="/dailybonus">Daglig Bonus</Link></li>
                    <li><Link to="/caseUnbox">Öppna lådor</Link></li>
                    <li><Link to="/roulette">Roulette</Link></li>
                    <li><Link to="/plinko">Plinko</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
