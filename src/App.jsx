import "./Styles/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Blackjack from "./Pages/blackjack";
import Blackjack2 from "./Pages/blackjack2.0";
import Coinflip from "./Pages/coinflip";
import Dailybonus from "./Pages/dailybonus";
import CaseUnbox from "./Pages/caseUnbox";
import Plinko from "./Pages/plinko";
import Roulette from "./Pages/roulette";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/blackjack2.0" element={<Blackjack2 />} />
        <Route path="/coinflip" element={<Coinflip />} />
        <Route path="/dailybonus" element={<Dailybonus />} />
        <Route path="/caseUnbox" element={<CaseUnbox />} />
        <Route path="/plinko" element={<Plinko />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
}
export default App;
