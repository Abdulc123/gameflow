import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Poker from "./pages/Poker";
import Mafia from "./pages/Mafia";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/poker" element={<Poker />} />
      <Route path="/mafia" element={<Mafia />} />
    </Routes>
  );
}
