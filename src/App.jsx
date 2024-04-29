import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Blackjack from "./Pages/blackjack";
import Coinflip from "./Pages/coinflip";
import Dailybonus from "./Pages/dailybonus";
import CaseUnbox from "./Pages/caseUnbox";


    function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blackjack" element={<Blackjack />} />
                <Route path="/coinflip" element={<Coinflip />} />
                <Route path="/dailybonus" element={<Dailybonus />} />
                <Route path="/caseUnbox" element={<CaseUnbox />} />
            </Routes>
        </Router>
    )
}
export default App