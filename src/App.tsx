import GameCard from "./components/GameCard";

function App() {
  return (
    <div>
      <GameCard
        title="Poker"
        description="Create or join a Poker lobby with friends."
        imageSource="../public/images/games/poker_icon.webp"
        onClick={() => console.log("Poker Selected")}
      />
      <GameCard
        title="Mafia"
        description="Create or join a Mafia lobby with friends."
        imageSource="../public/images/games/mafia_icon.webp"
        onClick={() => console.log("Mafia Selected")}
      />
    </div>
  );
}

export default App;
