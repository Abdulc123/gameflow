import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";
import { GameType } from "../types/game";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
        <GameCard
          title="Poker"
          description="Create or join a Poker lobby with friends."
          imageSource="../images/icons/poker_icon.webp"
          onClick={() => navigate(`/lobby?game=${GameType.Poker}`)}
        />
        <GameCard
          title="Mafia"
          description="Create or join a Mafia lobby with friends."
          imageSource="../images/icons/mafia_icon.webp"
          onClick={() => navigate(`/lobby?game=${GameType.Mafia}`)}
        />
      </div>
    </div>
  );
}
