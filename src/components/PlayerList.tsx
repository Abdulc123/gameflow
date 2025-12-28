import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/esm/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface PlayerListProp {
  players: string[];
}

export default function PlayerList({ players }: PlayerListProp) {
  const [showPlayers, setShowPlayers] = useState(true);
  return (
    <>
      <Button
        variant="light"
        size="sm"
        className="p-0 text-muted d-flex"
        onClick={() => setShowPlayers((prev) => !prev)}
      >
        Players
        <span>{showPlayers ? <BsChevronUp /> : <BsChevronDown />}</span>
      </Button>

      <Collapse in={showPlayers}>
        <div>
          <ListGroup className="list-group">
            {players.map((player) => (
              <ListGroup.Item key={player}>{player}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Collapse>
    </>
  );
}
