import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RoomItem from "../components/RoomItem";
import { Room } from "../types/room";
import SelectGame from "../components/SelectGame";
import { GameType, isValidGameType } from "../types/game";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Lobby() {
  const sampleRooms: Room[] = [
    {
      id: "1",
      game: GameType.Poker,
      name: "Poker Room",
      code: "AB123",
      maxCapacity: 4,
    },
    {
      id: "2",
      game: GameType.Mafia,
      name: "Other Mafia Fun",
      code: "CD456",
      maxCapacity: 4,
    },
    {
      id: "3",
      game: GameType.Mafia,
      name: "Mafia Fun",
      code: "EF789",
      maxCapacity: 8,
    },
    {
      id: "4",
      game: GameType.Poker,
      name: "Poker Fun",
      code: "GH012",
      maxCapacity: 8,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const gameParam = searchParams.get("game");
  const selectedGame = isValidGameType(gameParam) ? gameParam : GameType.All;
  const filterdRooms =
    selectedGame === GameType.All
      ? sampleRooms
      : sampleRooms.filter((r) => r.game === selectedGame);

  function handleGameChange(game: GameType) {
    setSearchParams({ game });
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-start pt-5">
      <Card className="w-100" style={{ maxWidth: 800 }} border="dark">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <SelectGame game={selectedGame} onChange={handleGameChange} />
            <h4 className="fw-semibold">Rooms</h4>
            <Button>Create Room</Button>
          </div>
        </Card.Header>

        <div style={{ maxHeight: 500, overflowY: "auto" }}>
          <ListGroup variant="flush">
            {filterdRooms.map((room) => (
              <RoomItem
                id={room.id}
                game={room.game}
                name={room.name}
                code={room.code}
                maxCapacity={room.maxCapacity}
              ></RoomItem>
            ))}
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
