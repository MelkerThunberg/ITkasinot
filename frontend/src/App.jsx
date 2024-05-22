import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blackjack from "./Pages/blackjack";
import CaseUnbox from "./Pages/caseUnbox";
import Coinflip from "./Pages/coinflip";
import Dailybonus from "./Pages/dailybonus";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Plinko from "./Pages/plinko";
import Roulette from "./Pages/roulette";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/navbar";
import Register from "./Pages/register";

const queryClient = new QueryClient();

function GameRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/coinflip" element={<Coinflip />} />
        <Route path="/dailybonus" element={<Dailybonus />} />
        <Route path="/caseUnbox" element={<CaseUnbox />} />
        <Route path="/plinko" element={<Plinko />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <GameRouter />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
