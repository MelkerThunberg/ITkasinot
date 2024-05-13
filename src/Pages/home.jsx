import { Link } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import "../Styles/home.css";

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Använd Navbar-komponenten här */}
      <div></div>
      <div class="content-container-homepage">
        <div class="homepage-links">
          <h1>Välkommen till ItKasinot</h1>
          <h2>Välj vilket spel du vill spela nedanför!</h2>

          <Link to="/blackjack">BlackJack</Link>

          <Link to="/coinflip">Singla Slant</Link>

          <Link to="/dailybonus">Daglig Bonus</Link>

          <Link to="/caseUnbox">Öppna lådor</Link>

          <Link to="/roulette">Roulette</Link>

          <Link to="/plinko">Plinko</Link>
        </div>
      </div>
    </div>
  );
}
