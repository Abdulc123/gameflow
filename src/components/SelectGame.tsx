import { useState } from "react";
import Form from "react-bootstrap/Form";
import { GameType } from "../types/game";

interface SelectGameProps {
  game: GameType | "";
  onChange: (game: GameType) => void;
}

export default function SelectGame({ game, onChange }: SelectGameProps) {
  return (
    <Form>
      <Form.Select
        size="sm"
        value={game}
        onChange={(e) => onChange(e.target.value as GameType)}
      >
        {Object.values(GameType).map((game) => (
          <option key={game} value={game}>
            {game.charAt(0).toUpperCase() + game.slice(1)}
          </option>
        ))}
        ;
      </Form.Select>
    </Form>
  );
}
