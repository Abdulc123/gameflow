import ListGroup from "react-bootstrap/ListGroup";
import PlayerList from "./PlayerList";
import { Room } from "../types/room";
import { GameType, getGameIconPath } from "../types/game";
import JoinRoomModal from "./JoinRoomModal";
import { useState } from "react";

export default function RoomItem({ id, game, name, code, maxCapacity }: Room) {
  const [currentCapacity, setCurrentCapacity] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  const isRoomFull = currentCapacity >= maxCapacity;
  function handleJoin(playerName: string) {
    setCurrentCapacity((prev) => prev + 1);
    setPlayers((prev) => [...prev, playerName]);
  }

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <div className="d-flex align-items-center gap-3 flex-grow-1">
        <div className="d-flex align-items-center gap-2">
          <img
            src={getGameIconPath(game)}
            alt={`${game} icon`}
            className="game-icon"
          />
        </div>

        <div>
          <div className="fw-semibold">{name}</div>
          <small>Code: {code}</small>
          <PlayerList players={players}></PlayerList>
        </div>
      </div>

      <span className="text-muted me-3">
        {currentCapacity} / {maxCapacity}
      </span>

      <JoinRoomModal
        roomName={name}
        isRoomFull={isRoomFull}
        handleJoin={handleJoin}
      ></JoinRoomModal>
    </ListGroup.Item>
  );
}
