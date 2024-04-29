import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Blackjack from "./pages/blackjack";
import Coinflip from "./pages/coinflip";
import Dailybonus from "./pages/dailybonus";
import CaseUnbox from "./pages/caseUnbox";
import Plinko from "./pages/plinko";
import Roulette from "./pages/roulette";


    function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blackjack" element={<Blackjack />} />
                <Route path="/coinflip" element={<Coinflip />} />
                <Route path="/dailybonus" element={<Dailybonus />} />
                <Route path="/caseUnbox" element={<CaseUnbox />} />
                <Route path="/plinko" element={<Plinko />} />
                <Route path="/roulette" element={<Roulette />} />
            </Routes>
        </Router>
    )
}
export default App